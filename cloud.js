// Inicio de sesión con Google + progreso en la nube (Firebase, plan gratis Spark).
// Para activarlo, pega aquí el bloque firebaseConfig de tu proyecto.
const FIREBASE_CONFIG = null;

const V = "10.12.2";
const box = document.getElementById("cloudBox");
function ui(html){ if(box) box.innerHTML = html; }

function mergeStates(a, b){ // a = local, b = nube. Nunca se pierde progreso.
  const newer = (b._updated||0) > (a._updated||0) ? b : a;
  const out = { ...a, ...newer };
  out.days = { ...a.days };
  Object.entries(b.days||{}).forEach(([k,v]) => out.days[k] = Math.max(out.days[k]||0, v));
  out.gScore = { ...a.gScore };
  Object.entries(b.gScore||{}).forEach(([k,v]) => out.gScore[k] = Math.max(out.gScore[k]??0, v));
  out.total = { ...a.total };
  Object.entries(b.total||{}).forEach(([k,v]) => out.total[k] = Math.max(out.total[k]||0, v));
  out.best = Math.max(a.best||0, b.best||0);
  out.vLearned = [...new Set([...(a.vLearned||[]), ...(b.vLearned||[])])];
  const seen = new Set(); out.mocks = [...(a.mocks||[]), ...(b.mocks||[])].filter(m => { const k = m.d+"|"+m.pct; if(seen.has(k)) return false; seen.add(k); return true; });
  out.aiKey = a.aiKey || ""; // la clave de IA nunca sube a la nube
  return out;
}

async function start(){
  if(!FIREBASE_CONFIG){ if(box) box.closest(".card").classList.add("hide"); return; }
  const { initializeApp } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`);
  const { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`);
  const { getFirestore, doc, getDoc, setDoc } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`);
  const app = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app); const db = getFirestore(app);
  await setPersistence(auth, browserLocalPersistence);
  try { await getRedirectResult(auth); } catch(e) {}
  let user = null, timer = null;

  window.cloudPush = () => {
    if(!user) return;
    clearTimeout(timer);
    timer = setTimeout(async () => {
      try { const data = { ...S }; delete data.aiKey; await setDoc(doc(db, "users", user.uid), { state: JSON.stringify(data), updated: Date.now() }); window.cloudStatus && cloudStatus("ok"); }
      catch(e) { window.cloudStatus && cloudStatus("err", e.message); }
    }, 2500);
  };

  async function pull(){
    try {
      const snap = await getDoc(doc(db, "users", user.uid));
      if(snap.exists()){
        const remote = JSON.parse(snap.data().state);
        const merged = mergeStates(S, remote);
        Object.keys(merged).forEach(k => S[k] = merged[k]);
        localStorage.setItem("dailyEnglish.v1", JSON.stringify(S));
        applyEng(); renderHome(); if(!document.getElementById("v-set").classList.contains("hide")) renderSet();
      }
      window.cloudPush();
    } catch(e) { toast("No pude leer tu progreso de la nube: " + e.message, true); }
  }

  function render(){
    if(user){
      ui(`<p>✅ Conectada como <b>${esc(user.email||user.displayName||"")}</b>.<br><span class="sub" id="cloudSt">Tu progreso se guarda solo en la nube. Si formateas la tablet, entra con la misma cuenta y vuelve todo.</span></p>
          <div class="row"><button class="sec" id="cloudSync">🔄 Sincronizar ahora</button><button class="ghost" id="cloudOut">Cerrar sesión</button></div>`);
      document.getElementById("cloudSync").onclick = async () => { await pull(); toast("¡Sincronizado! 🦎"); };
      document.getElementById("cloudOut").onclick = () => signOut(auth);
    } else {
      ui(`<p class="sub">Entra con tu cuenta de Google para que tu progreso se guarde en la nube y no se pierda nunca.</p>
          <button id="cloudIn">🔐 Entrar con Google</button>`);
      document.getElementById("cloudIn").onclick = async () => {
        const p = new GoogleAuthProvider(); p.setCustomParameters({ prompt: "select_account" });
        try { await signInWithPopup(auth, p); }
        catch(e) {
          if(e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment") return signInWithRedirect(auth, p);
          if(e.code !== "auth/popup-closed-by-user" && e.code !== "auth/cancelled-popup-request") toast("No pude iniciar sesión: " + (e.code||e.message), true);
        }
      };
    }
  }
  window.cloudStatus = (st, msg) => { const el = document.getElementById("cloudSt"); if(el) el.textContent = st==="ok" ? `☁️ Guardado en la nube (${new Date().toLocaleTimeString()}).` : "⚠️ No se pudo guardar en la nube: " + msg; };
  onAuthStateChanged(auth, async u => { const was = user; user = u; render(); if(u && !was){ await pull(); toast(`¡Hola${u.displayName?", "+u.displayName.split(" ")[0]:""}! Tu progreso está a salvo en la nube. 🦎`); } });
}
start().catch(e => ui(`<p class="sub">⚠️ No pude cargar el inicio de sesión (${esc(e.message)}). ¿Tienes internet?</p>`));
