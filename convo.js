// Conversación con Iggy: "¿Cómo dirías…?"  [frase en español, [respuestas aceptadas], explicación, tema B1]
const CONVO = [
["Si yo fuera tú, estudiaría más.",["If I were you, I would study more","If I were you I'd study more"],"Segundo condicional: If + pasado (con to be se usa WERE para todos) + would + verbo.","cond"],
["Si hubiera estudiado, habría pasado el examen.",["If I had studied, I would have passed the exam","If I'd studied, I'd have passed the exam"],"Tercer condicional: If + had + participio, would have + participio.","cond"],
["Debí haber salido más temprano.",["I should have left earlier","I should've left earlier"],"Arrepentimiento en pasado: should have + participio (left).","shouldhave"],
["He estado estudiando inglés por dos años.",["I have been studying English for two years","I've been studying English for two years"],"Present perfect continuous: have been + -ing, con FOR + periodo de tiempo.","ppcont"],
["¿Puedes decirme dónde está el baño?",["Can you tell me where the bathroom is","Could you tell me where the bathroom is"],"Pregunta indirecta: después de 'Can you tell me', va sujeto + verbo (the bathroom IS), no 'where is'.","embed"],
["El puente fue construido en 1990.",["The bridge was built in 1990"],"Voz pasiva en pasado: was + participio (built).","passive"],
["Ella me dijo que estaba cansada.",["She told me that she was tired","She told me she was tired"],"Estilo indirecto: tell + persona (told me), y el presente retrocede al pasado (am → was).","reported"],
["Mañana a esta hora estaré presentando el examen.",["This time tomorrow I will be taking the exam","This time tomorrow I'll be taking the exam","At this time tomorrow I will be taking the exam"],"Futuro continuo: will be + -ing. 'Presentar un examen' = take an exam (no 'present').","futcont"],
["Cuando llegué, la reunión ya había empezado.",["When I arrived, the meeting had already started","When I arrived the meeting had already begun"],"Past perfect: had + participio para lo que pasó ANTES de otra acción pasada.","pastperf"],
["Estaba cocinando cuando sonó el teléfono.",["I was cooking when the phone rang"],"Pasado continuo (was cooking) para la acción larga + pasado simple (rang) para la que interrumpe.","pastcont"],
["Ni Juan ni María vinieron a la fiesta.",["Neither Juan nor Maria came to the party"],"Neither … nor = ni … ni. El verbo va en afirmativo porque neither ya es negativo.","both"],
["Hacía demasiado frío para salir.",["It was too cold to go out"],"Too + adjetivo + to + verbo = demasiado … para.","intens"],
["Fue un examen tan difícil.",["It was such a difficult exam"],"Such a + adjetivo + sustantivo. 'So' va solo con adjetivo: 'The exam was so difficult'.","intens"],
["Este celular es más barato que ese.",["This phone is cheaper than that one","This cell phone is cheaper than that one","This phone is cheaper than that"],"Adjetivo corto (cheap) + er + than.","compar"],
["Es el edificio más alto de la ciudad.",["It's the tallest building in the city","It is the tallest building in the city"],"Superlativo corto: the + adjetivo + est. Y se dice IN the city, no 'of'.","compar"],
["Eres ingeniera, ¿verdad?",["You are an engineer, aren't you","You're an engineer, aren't you"],"Question tag: frase afirmativa con are → tag negativo aren't you?","tags"],
["Aunque estaba lloviendo, salimos.",["Although it was raining, we went out","Even though it was raining, we went out"],"Although + frase completa (sujeto + verbo). Con sustantivo sería 'Despite the rain'.","conn"],
["No tienes que venir mañana.",["You don't have to come tomorrow","You do not have to come tomorrow"],"Don't have to = no es necesario. ¡Mustn't significaría que está PROHIBIDO venir!","musthave"],
["Debe estar cansada, trabajó todo el día.",["She must be tired, she worked all day","She must be tired. She worked all day"],"Deducción positiva: must be. ","deduct"],
["Eso no puede ser verdad.",["That can't be true","That cannot be true"],"Deducción negativa: can't be (no 'mustn't').","deduct"],
["Puede que llueva más tarde.",["It might rain later","It may rain later"],"Posibilidad: might / may + verbo base (sin to).","maymight"],
["Mira esas nubes, va a llover.",["Look at those clouds, it's going to rain","Look at those clouds. It is going to rain","Look at those clouds, it is going to rain"],"Predicción con evidencia que ves → going to.","willgoing"],
["Creo que vas a pasar el examen.",["I think you will pass the exam","I think you'll pass the exam"],"Predicción basada en opinión (I think) → will.","willgoing"],
["¿A dónde fuiste el fin de semana pasado?",["Where did you go last weekend"],"Wh- + did + sujeto + verbo BASE (go, no 'went').","whpast"],
["¿Quién rompió la ventana?",["Who broke the window"],"Pregunta sobre el sujeto: sin did. Who + verbo en pasado.","whpast"],
["Nunca he estado en Europa.",["I have never been to Europe","I've never been to Europe"],"Experiencia sin fecha → present perfect. 'Estar en un lugar' de visita = have been to.","ppvsps"],
["Fui a Cartagena el año pasado.",["I went to Cartagena last year"],"Fecha específica (last year) → pasado simple.","ppvsps"],
["Mi carro se dañó en la autopista.",["My car broke down on the highway"],"Phrasal verb break down = dañarse (máquinas o carros).","phrasal"],
["Nos quedamos sin café.",["We ran out of coffee"],"Run out of = quedarse sin algo. Pasado: ran.","phrasal"],
["Espero con ganas verte.",["I'm looking forward to seeing you","I am looking forward to seeing you","I look forward to seeing you"],"Look forward to + verbo-ING (porque 'to' aquí es preposición).","phrasal"],
["La oficina está en el tercer piso.",["The office is on the third floor"],"Pisos de un edificio → ON.","prep"],
["Ella habla inglés con fluidez.",["She speaks English fluently"],"El adverbio (fluently) describe cómo habla y va al final.","adverbs"],
["Él nunca llega tarde.",["He is never late","He's never late"],"Con to be, el adverbio de frecuencia va DESPUÉS: is never.","adverbs"],
["¿Sabes a qué hora empieza la clase?",["Do you know what time the class starts"],"Pregunta indirecta: sin does y con orden normal (the class starts).","embed"],
["Me preguntó dónde vivía.",["He asked me where I lived","She asked me where I lived"],"Pregunta reportada: orden normal y el verbo retrocede (live → lived).","reported"],
["El correo ya ha sido enviado.",["The email has already been sent"],"Pasiva en present perfect: has been + participio.","passive"],
["Tengo hambre. —Yo también.",["I'm hungry. Me too","I'm hungry. So am I","I am hungry. So am I"],"Para estar de acuerdo: So am I (o informal: Me too).","both"],
["No me gusta el café. —A mí tampoco.",["I don't like coffee. Neither do I","I don't like coffee. Me neither","I don't like coffee. I don't either"],"Acuerdo con algo negativo: Neither do I / Me neither.","both"],
["Ojalá tuviera más tiempo.",["I wish I had more time"],"Wish + pasado simple para desear algo diferente en el presente.","cond"],
["Tuve que trabajar hasta tarde ayer.",["I had to work late yesterday"],"Must no tiene pasado: se usa had to.","musthave"]
];

// La personalidad de Iggy: burlona pero cariñosa
const ROAST_OK = [
"Mmm… correcto. ¿Quién te dio permiso de hablar tan bien? Me vas a dejar sin trabajo. 🦎",
"Perfecto. Ya casi suenas nativa… nativa de algún lado, pero nativa. 😏",
"¡Bien! Hasta yo, que soy iguana, me quedé con la boca abierta. Y eso que como moscas.",
"Correcto. No te emociones mucho, que igual te voy a seguir molestando. 💅",
"¿Eso fue inglés? ¡Sí lo fue! Alerta: la estudiante está mejorando peligrosamente.",
"Impecable. Voy a tener que buscar preguntas más difíciles, qué fastidio.",
"Bien dicho. Shakespeare está aplaudiendo… bueno, desde la tumba, pero aplaudiendo.",
"¡Exacto! Si sigues así, el examen B1 va a pedir perdón.",
"Correcto, y con estilo. Me caes bien hoy… no te acostumbres. 🦎",
"¡Eso! Hasta pronunciaste bien. ¿Te cambiaron por otra persona?"
];
const ROAST_BAD = [
"Ajá… ¿y eso lo aprendiste en la Universidad de YouTube? 🙄",
"Casi. Y 'casi' es lo que dice el que pierde el bus.",
"Interesante idioma ese que hablaste. ¿Se llama Inglañol? 🦎",
"Mmm no. Mi abuela iguana lo dice mejor, y solo sabe decir 'hiss'.",
"Wow. Si el examen fuera de creatividad, te sacabas un 5. Pero no lo es.",
"Bonito intento. Los profesores de inglés del mundo acaban de sentir un escalofrío.",
"No, mi reina. Respira, que te explico. 💅",
"Eso sonó a traducción de Google del 2008. Vamos a arreglarlo.",
"Error detectado. Tranquila, no se lo cuento a nadie… bueno, solo a las otras iguanas.",
"Uy, no. Pero me encanta tu confianza, la gramática ya llegará."
];
const ROAST_MID = [
"Casi casi… te faltó poquito. Como cuando te faltan 5 minutos para llegar y ya vas tarde.",
"Ibas muy bien y de pronto… ¡pum! se te cayó una palabra. Mira cuál:",
"Medio bien. Te doy media mosca de premio. 🪰"
];
