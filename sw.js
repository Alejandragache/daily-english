// Service worker: funciona sin internet y envía el recordatorio diario
const CACHE="daily-english-v9";
const FILES=["./","./index.html","./grammar.js","./manifest.json","./icon-192.png","./icon-512.png","./iguana.svg","./iguana-sad.svg","./vocab.js","./convo.js","./cloud.js","./dialogues.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE&&x!=="de-state").map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  // primero la red (para recibir actualizaciones), si no hay internet usa la copia guardada
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});
function ymd(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
async function maybeRemind(){
  const c=await caches.open("de-state");const r=await c.match("state.json");if(!r)return;
  const st=await r.json();const now=new Date();
  const [h,m]=(st.time||"19:00").split(":").map(Number);
  if(now.getHours()*60+now.getMinutes()<h*60+m)return;
  const done=st.day===ymd(now)?st.done:0;if(done>=st.goal)return;
  if(st.lastNotified===ymd(now))return;
  st.lastNotified=ymd(now);await c.put("state.json",new Response(JSON.stringify(st)));
  const body=st.streak>0?`Tienes una racha de ${st.streak} días 🔥 ¡No la pierdas! Te faltan ${st.goal-done} ejercicios.`:`Te faltan ${st.goal-done} ejercicios para tu meta de hoy. ¡Solo son unos minutos!`;
  await self.registration.showNotification("⏰ Hora de practicar inglés",{body,icon:"icon-192.png",badge:"icon-192.png",tag:"daily"});
}
self.addEventListener("periodicsync",e=>{if(e.tag==="daily-reminder")e.waitUntil(maybeRemind())});
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.matchAll({type:"window"}).then(l=>l.length?l[0].focus():clients.openWindow("./index.html")))});
