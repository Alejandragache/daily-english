// Temas de la Validación B1. Cada pregunta: [frase con ___, opciones, índice correcto, explicación en español]
const GRAMMAR = [
{id:"adverbs",t:"Adverbs",es:"Adverbios",url:"https://www.examenglish.com/grammar/b1_adverbs.htm",
exp:`<p>Los adverbios dicen <b>cómo, cuándo, dónde o con qué frecuencia</b> pasa algo. Muchos se forman con adjetivo + <b>-ly</b>: quick → quick<b>ly</b>, careful → careful<b>ly</b>, easy → eas<b>ily</b>.</p>
<p><b>Ojo:</b> el adjetivo describe un sustantivo (<i>a <b>good</b> engineer</i>); el adverbio describe un verbo (<i>she works <b>well</b></i>). Irregulares: good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b> (<i>hardly</i> significa “casi no”).</p>
<p><b>Posición de los de frecuencia</b> (always, usually, often, sometimes, never): antes del verbo principal, pero después de <b>to be</b>: <i>I <b>always</b> check the code. / He is <b>never</b> late.</i></p>`,
ex:["She speaks English fluently.","The system works well.","We hardly ever use paper now."],
q:[["The engineer explained the problem very ___.",["clear","clearly","clearness"],1,"Describe cómo explicó (el verbo), entonces va el adverbio: clear + ly = clearly."],
["My new laptop works really ___.",["good","well","goodly"],1,"El adverbio de good es well. «Good» es adjetivo (a good laptop)."],
["He ___ late for meetings.",["is never","never is","is late never"],0,"Con el verbo to be, el adverbio de frecuencia va DESPUÉS: is never."],
["I could ___ hear him because of the noise.",["hard","hardly","hardy"],1,"Hardly = casi no. «Hard» como adverbio significa «duro/mucho» (work hard)."],
["She drives very ___. She has never had an accident.",["careful","carefully","care"],1,"Describe cómo maneja (verbo) → carefully."]]},

{id:"both",t:"Both, either, neither",es:"Ambos, cualquiera, ninguno",url:"https://www.examenglish.com/grammar/b1_both_either_neither.htm",
exp:`<p><b>Both</b> = los dos (sí): <i><b>Both</b> options are good. / <b>Both</b> Ana <b>and</b> Luis passed.</i></p>
<p><b>Either</b> = uno u otro / cualquiera de los dos: <i>You can use <b>either</b> laptop. / <b>Either</b> Monday <b>or</b> Tuesday.</i> En negativo: <i>I don't like it <b>either</b></i> (a mí tampoco).</p>
<p><b>Neither</b> = ninguno de los dos (ya es negativo, no se usa “not”): <i><b>Neither</b> answer is correct. / <b>Neither</b> Pedro <b>nor</b> Ana came.</i></p>
<p>Respuestas cortas: <i>“I'm tired.” – “<b>So am I</b>.”</i> / <i>“I'm not tired.” – “<b>Neither am I</b>.”</i></p>`,
ex:["Both projects are finished.","You can pay either in cash or by card.","Neither of my brothers speaks English."],
q:[["___ my parents are engineers. (los dos)",["Both","Either","Neither"],0,"Los dos (afirmativo) = both."],
["We can meet ___ on Monday or on Tuesday.",["both","either","neither"],1,"Either … or = o uno o el otro."],
["___ John nor Mary came to the meeting.",["Either","Both","Neither"],2,"Neither … nor = ni … ni. Es negativo, el verbo va en afirmativo (came)."],
["“I don't like coffee.” – “I don't like it ___.”",["too","either","neither"],1,"En una frase negativa «tampoco» se dice either al final. «Too» es solo para afirmativas."],
["“I can't swim.” – “___ can I.”",["So","Either","Neither"],2,"Para estar de acuerdo con algo negativo: Neither + auxiliar + sujeto."]]},

{id:"intens",t:"Intensifiers: so, such, too, enough",es:"Intensificadores",url:"https://www.examenglish.com/grammar/b1_intensifiers.htm",
exp:`<p><b>so</b> + adjetivo/adverbio: <i>It was <b>so</b> difficult.</i></p>
<p><b>such (a/an)</b> + (adjetivo) + sustantivo: <i>It was <b>such a</b> difficult exam. / <b>such</b> nice people.</i></p>
<p><b>too</b> + adjetivo = demasiado (algo negativo): <i>This box is <b>too</b> heavy to lift.</i></p>
<p>adjetivo + <b>enough</b> = suficiente (va DESPUÉS del adjetivo): <i>He isn't old <b>enough</b>.</i> Pero <b>enough</b> + sustantivo (va ANTES): <i>We don't have <b>enough</b> time.</i></p>
<p>Otros intensificadores B1: <i>extremely, really, quite, rather, absolutely</i> (con adjetivos extremos: <i>absolutely amazing</i>, no “very amazing”).</p>`,
ex:["The test was so long that I didn't finish.","It was such a good presentation.","The room isn't big enough."],
q:[["It was ___ boring film that I fell asleep.",["so","such a","too"],1,"Hay sustantivo (film) con artículo: such a + adjetivo + sustantivo."],
["The coffee is ___ hot to drink.",["too","enough","such"],0,"Demasiado caliente para tomarlo → too + adjetivo + to."],
["She isn't ___ to drive. She's only 15.",["enough old","old enough","too old"],1,"Enough va DESPUÉS del adjetivo: old enough."],
["We don't have ___ to finish the project today.",["time enough","enough time","so time"],1,"Con sustantivos, enough va ANTES: enough time."],
["The view from the mountain was ___ amazing.",["very","absolutely","such"],1,"Amazing es un adjetivo extremo; se intensifica con absolutely, no con very."]]},

{id:"compar",t:"Comparatives & superlatives",es:"Comparativos y superlativos",url:"https://www.examenglish.com/grammar/a2_comparative_adjectives.htm",
exp:`<p><b>Adjetivos cortos</b> (1 sílaba o terminan en -y): +<b>er than</b> / <b>the</b> +<b>est</b>: <i>fast → faster → the fastest; easy → easier → the easiest; big → bigger → the biggest.</i></p>
<p><b>Adjetivos largos</b>: <b>more … than</b> / <b>the most</b>: <i>more expensive, the most expensive.</i></p>
<p><b>Irregulares</b>: good → better → the best; bad → worse → the worst; far → further → the furthest.</p>
<p>Igualdad: <b>as … as</b>: <i>This phone is <b>as fast as</b> that one.</i> Negativo: <i>not as … as</i>. Para dar fuerza: <i><b>much / a lot</b> faster</i>.</p>`,
ex:["Python is easier than C++.","This is the most expensive laptop in the store.","My English is better than last year."],
q:[["This bridge is ___ than the old one.",["more long","longer","longest"],1,"Long es corto (1 sílaba) → longer than."],
["It's the ___ building in the city.",["most tall","taller","tallest"],2,"Superlativo de un adjetivo corto: the tallest."],
["This solution is ___ than the first one.",["more efficient","efficienter","most efficient"],0,"Efficient es largo → more efficient than."],
["Today the traffic is ___ than yesterday.",["badder","worse","worst"],1,"Bad es irregular: bad → worse → the worst."],
["My car isn't as fast ___ yours.",["than","as","that"],1,"La comparación de igualdad usa as … as."]]},

{id:"tags",t:"Question tags",es:"Preguntas de confirmación (¿verdad?)",url:"https://www.examenglish.com/grammar/B1_question_tags.htm",
exp:`<p>Son las pequeñas preguntas al final para confirmar (“¿cierto?”, “¿no?”).</p>
<p><b>Regla:</b> frase afirmativa → tag negativo; frase negativa → tag afirmativo. Se usa <b>el mismo auxiliar</b> de la frase y un pronombre.</p>
<p><i>You are an engineer, <b>aren't you</b>? / She doesn't work here, <b>does she</b>? / They finished, <b>didn't they</b>? / You can help, <b>can't you</b>? / He has left, <b>hasn't he</b>?</i></p>
<p>Especiales: <i>I am → <b>aren't I</b>? / Let's … → <b>shall we</b>? / Imperativo → <b>will you</b>?</i></p>`,
ex:["It's cold today, isn't it?","You didn't call him, did you?","Let's start, shall we?"],
q:[["You are coming tomorrow, ___?",["are you","aren't you","don't you"],1,"Frase afirmativa con are → tag negativo aren't you."],
["She works in Bogotá, ___?",["doesn't she","isn't she","don't she"],0,"Presente simple con he/she sin auxiliar visible → usamos does: doesn't she."],
["They didn't finish the report, ___?",["didn't they","did they","do they"],1,"Frase negativa en pasado → tag afirmativo con did."],
["I'm late, ___?",["amn't I","aren't I","isn't I"],1,"Caso especial: I am → aren't I?"],
["You have seen this movie, ___?",["haven't you","didn't you","don't you"],0,"El auxiliar es have (present perfect) → haven't you."]]},

{id:"cond",t:"Conditionals: 2nd and 3rd",es:"Condicionales 2 y 3",url:"https://www.examenglish.com/grammar/B1_second_conditional.htm",
exp:`<p><b>Segundo condicional</b> (situación imaginaria en el presente/futuro): <b>If + pasado simple, would + verbo</b>.<br><i>If I <b>had</b> more money, I <b>would buy</b> a new car.</i> (no tengo dinero). Con to be se usa <b>were</b> para todos: <i>If I <b>were</b> you, I would study more.</i></p>
<p><b>Tercer condicional</b> (pasado que ya no se puede cambiar, arrepentimiento): <b>If + had + participio, would have + participio</b>.<br><i>If I <b>had studied</b>, I <b>would have passed</b>.</i> (no estudié y no pasé).</p>
<p>Truco: en la parte del <b>if</b> nunca va “would”.</p>`,
ex:["If I lived in London, I would speak English every day.","If she had left earlier, she wouldn't have missed the bus."],
q:[["If I ___ you, I would accept the job.",["am","were","would be"],1,"Segundo condicional con to be: If I were you."],
["If we had more time, we ___ visit the museum.",["will","would","had"],1,"Segundo condicional: If + pasado, would + verbo."],
["If he had studied, he ___ the exam.",["would pass","would have passed","had passed"],1,"Tercer condicional: would have + participio (passed)."],
["If I ___ about the meeting, I would have gone.",["knew","had known","would know"],1,"Tercer condicional: If + had + participio → had known."],
["What would you do if you ___ the lottery?",["win","won","would win"],1,"Situación imaginaria → segundo condicional: pasado simple (won)."]]},

{id:"conn",t:"Connecting words: cause, effect, contrast",es:"Conectores: causa, efecto, contraste",url:"https://www.examenglish.com/grammar/b1_connectors.htm",
exp:`<p><b>Causa</b>: <i>because</i> + frase, <i>because of / due to</i> + sustantivo: <i>The flight was cancelled <b>because of</b> the storm.</i></p>
<p><b>Efecto/resultado</b>: <i>so, therefore, as a result</i>: <i>It rained, <b>so</b> we stayed home.</i></p>
<p><b>Contraste</b>: <i>but, however</i> (al inicio, con coma), <i>although / even though</i> + frase, <i>despite / in spite of</i> + sustantivo o -ing:<br><i><b>Although</b> it was late, we continued. / <b>Despite</b> the rain, we continued. / <b>Despite being</b> tired, …</i></p>
<p><b>Añadir</b>: <i>also, in addition, moreover</i>. <b>Propósito</b>: <i>to, in order to, so that</i>.</p>`,
ex:["Although the test was hard, I passed.","The project was delayed due to a lack of funds.","He was sick; therefore, he stayed at home."],
q:[["___ it was raining, we went for a walk.",["Despite","Although","Because"],1,"Antes de una frase completa (sujeto + verbo) se usa although. Despite va con sustantivo."],
["The match was cancelled ___ the bad weather.",["because","because of","although"],1,"Antes de un sustantivo (the bad weather) → because of."],
["___ being tired, she finished the report.",["Although","Despite","However"],1,"Despite + -ing (being)."],
["I studied a lot. ___, I didn't pass.",["However","Because","So"],0,"Contraste entre dos frases separadas → However, con coma."],
["The system was slow, ___ we restarted the server.",["so","although","despite"],0,"Resultado → so."]]},

{id:"embed",t:"Embedded questions",es:"Preguntas indirectas",url:"https://www.examenglish.com/grammar/b1_questions.htm",
exp:`<p>Son preguntas dentro de otra frase, más educadas: <i>Can you tell me…? / Do you know…? / I wonder…</i></p>
<p><b>Clave:</b> después de la introducción, el orden es como en una frase normal (<b>sujeto + verbo</b>), sin do/does/did.</p>
<p><i>Where is the station? → Do you know where <b>the station is</b>?</i><br><i>What time does it start? → Can you tell me what time <b>it starts</b>?</i></p>
<p>Si es pregunta de sí/no se usa <b>if / whether</b>: <i>Do you know <b>if</b> he is coming?</i></p>`,
ex:["Could you tell me where the meeting room is?","I don't know what time the store closes.","Do you know if she passed?"],
q:[["Can you tell me where ___?",["is the bank","the bank is","does the bank"],1,"En pregunta indirecta va sujeto + verbo: the bank is."],
["Do you know what time ___?",["the train leaves","does the train leave","leaves the train"],0,"Sin auxiliar does y con orden normal: the train leaves."],
["I wonder ___ he will come to the party.",["that","if","what"],1,"Pregunta de sí/no → if (o whether)."],
["Could you tell me how much ___?",["does it cost","it costs","costs it"],1,"Orden normal: it costs."],
["I don't know where ___ yesterday.",["did she go","she went","went she"],1,"Sin did y con el verbo en pasado: she went."]]},

{id:"futcont",t:"Future continuous",es:"Futuro continuo",url:"https://www.examenglish.com/grammar/b1_future_continuous.htm",
exp:`<p><b>will be + verbo-ing</b>. Indica una acción que <b>estará en progreso</b> en un momento del futuro.</p>
<p><i>This time tomorrow I <b>will be taking</b> my exam.</i> (mañana a esta hora estaré presentando el examen)<br><i>Don't call at 8, we <b>will be having</b> dinner.</i></p>
<p>También sirve para preguntar planes de forma educada: <i><b>Will you be using</b> the car tonight?</i></p>`,
ex:["At 10 a.m. I will be working.","Next year she will be living in Canada."],
q:[["This time next week I ___ on the beach.",["will lie","will be lying","am lie"],1,"Acción en progreso en un momento del futuro → will be + -ing."],
["Don't call me at 9. I ___ a meeting.",["will be having","have","had"],0,"A esa hora estará en medio de la reunión → will be having."],
["___ you be using the computer tonight?",["Are","Will","Do"],1,"Futuro continuo en pregunta: Will you be using…?"],
["In 2030, people ___ in smart cities.",["will be living","will living","be living"],0,"Estructura completa: will + be + -ing."]]},

{id:"deduct",t:"Modals: must / can't (deduction)",es:"Deducción: debe ser / no puede ser",url:"https://www.examenglish.com/grammar/b1_modals_recommendations.htm",
exp:`<p>Para deducir algo con lógica:</p>
<p><b>must</b> = estoy casi seguro de que SÍ: <i>The lights are off. They <b>must</b> be asleep.</i></p>
<p><b>can't</b> = estoy casi seguro de que NO: <i>That <b>can't</b> be John. He's in Paris.</i> (no se usa mustn't para deducir)</p>
<p><b>might / may / could</b> = es posible.</p>
<p>En pasado: <b>must have / can't have + participio</b>: <i>She <b>must have</b> forgotten. / He <b>can't have</b> finished already.</i></p>`,
ex:["You've worked all day. You must be tired.","It can't be true!"],
q:[["She has three jobs. She ___ be very busy.",["must","can't","mustn't"],0,"Deducción positiva fuerte → must."],
["That ___ be Mark. He's on holiday in Mexico.",["must","can't","mustn't"],1,"Deducción negativa → can't. Mustn't es prohibición, no deducción."],
["The ground is wet. It ___ rained last night.",["must have","can't have","must"],0,"Deducción sobre el pasado → must have + participio."],
["He ___ finished the project already; he started an hour ago.",["must have","can't have","should"],1,"Es imposible (deducción negativa en pasado) → can't have."]]},

{id:"maymight",t:"Modals: might, may, will, probably",es:"Probabilidad en el futuro",url:"https://www.examenglish.com/grammar/b1_may_might.htm",
exp:`<p>Del más seguro al menos seguro:</p>
<p><b>will</b> (seguro) → <b>will probably</b> (muy probable) → <b>may / might</b> (posible, tal vez) → <b>probably won't</b> → <b>won't</b>.</p>
<p><b>Posición de probably</b>: después de will y antes de won't: <i>It <b>will probably</b> rain. / It <b>probably won't</b> rain.</i></p>
<p>may/might + verbo base (sin to): <i>I <b>might go</b> to the party.</i></p>`,
ex:["I might be late tomorrow.","She will probably get the job.","It probably won't snow."],
q:[["Take an umbrella. It ___ rain later.",["might","must","can't"],0,"Es una posibilidad → might."],
["He ___ come to the meeting; he's not sure.",["will","may","must"],1,"Hay duda → may."],
["It ___ be sunny tomorrow. (muy probable)",["will probably","probably will not","might not"],0,"Muy probable → will probably (probably va después de will)."],
["She ___ pass the exam; she didn't study at all.",["probably won't","won't probably","will probably"],0,"En negativo probably va ANTES de won't."],
["I might ___ to the cinema tonight.",["to go","go","going"],1,"Después de might va el verbo base sin to."]]},

{id:"shouldhave",t:"Modals: should have / might have",es:"Modales en pasado",url:"https://www.examenglish.com/grammar/B1_should_have.htm",
exp:`<p><b>modal + have + participio</b> habla del pasado:</p>
<p><b>should have</b> = debí haber (crítica o arrepentimiento): <i>I <b>should have studied</b> more.</i> / <b>shouldn't have</b> = no debí: <i>You <b>shouldn't have</b> said that.</i></p>
<p><b>might / may / could have</b> = tal vez pasó: <i>He <b>might have missed</b> the bus.</i></p>
<p><b>could have</b> también = podría haber (pero no lo hice): <i>I <b>could have</b> won.</i></p>
<p><b>would have</b> = habría (ver tercer condicional).</p>`,
ex:["We should have left earlier.","She might have forgotten the meeting."],
q:[["I failed. I ___ studied more.",["should have","must have","can't have"],0,"Arrepentimiento → should have + participio."],
["You ___ told him the secret. Now he's angry.",["shouldn't have","mustn't","should have"],0,"Crítica a algo que hizo → shouldn't have."],
["He isn't here. He ___ missed the train.",["might have","should have","must"],0,"Posibilidad en pasado → might have."],
["We should have ___ a taxi.",["take","took","taken"],2,"Después de have va el participio: taken."]]},

{id:"musthave",t:"Modals: must / have to",es:"Obligación: must / have to",url:"https://www.examenglish.com/grammar/b1_modals_recommendations.htm",
exp:`<p><b>must</b> = obligación que siente quien habla o reglas escritas: <i>I <b>must</b> call my mom. / Passengers <b>must</b> wear seatbelts.</i></p>
<p><b>have to</b> = obligación externa (reglas, el jefe): <i>I <b>have to</b> wear a uniform at work.</i> Es el que se usa en pasado y futuro: <i>I <b>had to</b> work. / I <b>will have to</b> work.</i></p>
<p><b>¡Cuidado con el negativo!</b> <b>mustn't</b> = prohibido. <b>don't have to</b> = no es necesario.<br><i>You <b>mustn't</b> smoke here. / You <b>don't have to</b> come, it's optional.</i></p>`,
ex:["Students must bring ID to the exam.","Yesterday I had to stay late.","You don't have to pay; it's free."],
q:[["You ___ smoke in the hospital. It's forbidden.",["don't have to","mustn't","haven't to"],1,"Prohibición → mustn't."],
["Tomorrow is a holiday, so I ___ go to work.",["mustn't","don't have to","have to"],1,"No es necesario → don't have to."],
["Yesterday she ___ work until 10 p.m.",["must","had to","musted"],1,"Must no tiene pasado; se usa had to."],
["Does he ___ wear a uniform?",["must","have to","has to"],1,"En pregunta con does, el verbo va en base: have to."]]},

{id:"pastcont",t:"Past continuous",es:"Pasado continuo",url:"https://www.examenglish.com/grammar/A2_past_continuous.htm",
exp:`<p><b>was/were + verbo-ing</b>: acción en progreso en un momento del pasado.</p>
<p><i>At 8 p.m. I <b>was studying</b>.</i></p>
<p>Muy común con el pasado simple: la acción larga va en continuo y la que la interrumpe en simple: <i>I <b>was walking</b> home <b>when</b> it <b>started</b> to rain.</i></p>
<p><b>while</b> + continuo: <i><b>While</b> she <b>was cooking</b>, he <b>was cleaning</b>.</i></p>`,
ex:["What were you doing at 10 last night?","I was sleeping when the phone rang."],
q:[["I ___ TV when the power went off.",["watched","was watching","were watching"],1,"Acción larga interrumpida → was + -ing (I → was)."],
["They ___ football at 5 p.m. yesterday.",["was playing","were playing","are playing"],1,"They → were + -ing."],
["While I was driving, my phone ___.",["rang","was ring","ringing"],0,"La acción corta que interrumpe va en pasado simple: rang."],
["What ___ you doing at midnight?",["did","were","was"],1,"Pregunta en pasado continuo: were you doing."]]},

{id:"pastperf",t:"Past perfect",es:"Pasado perfecto",url:"https://www.examenglish.com/grammar/B1_past_perfect.htm",
exp:`<p><b>had + participio</b>: una acción que pasó <b>antes</b> de otra acción pasada (“el pasado del pasado”).</p>
<p><i>When I arrived, the meeting <b>had</b> already <b>started</b>.</i> (primero empezó la reunión, después llegué)</p>
<p>Palabras típicas: <i>already, before, by the time, after, never … before</i>.<br><i>I <b>had never seen</b> snow before I went to Canada.</i></p>`,
ex:["By the time we got there, the train had left.","She was tired because she had worked all night."],
q:[["When I got to the station, the train ___.",["already left","had already left","has already left"],1,"El tren se fue ANTES de que yo llegara → had + participio."],
["I ___ never ___ sushi before that trip.",["have / eaten","had / eaten","did / eat"],1,"Experiencia anterior a un momento pasado → had never eaten."],
["After she ___ her homework, she went out.",["had finished","has finished","finish"],0,"Primero terminó, luego salió → had finished."],
["By the time the police arrived, the thief ___.",["escaped","had escaped","has escaped"],1,"«By the time» + pasado suele pedir pasado perfecto en la otra parte."]]},

{id:"pastsimple",t:"Past simple",es:"Pasado simple",url:"https://www.examenglish.com/grammar/A2_past_simple.htm",
exp:`<p>Acciones terminadas en un momento del pasado (<i>yesterday, last week, in 2020, ago</i>).</p>
<p>Regulares: +<b>ed</b> (work → work<b>ed</b>, study → stud<b>ied</b>, stop → stop<b>ped</b>). Irregulares hay que aprenderlos: go → <b>went</b>, see → <b>saw</b>, buy → <b>bought</b>, take → <b>took</b>, write → <b>wrote</b>.</p>
<p>Negativo y pregunta con <b>did</b> + verbo BASE: <i>I <b>didn't go</b>. / <b>Did</b> you <b>see</b> it?</i> (nunca “didn't went”)</p>`,
ex:["I visited my grandparents last weekend.","She didn't come to class yesterday.","Did you finish the report?"],
q:[["Yesterday I ___ to the university by bus.",["go","went","gone"],1,"Pasado de go (irregular) = went."],
["She didn't ___ the email.",["sent","send","sended"],1,"Después de didn't va el verbo en base: send."],
["___ you watch the game last night?",["Did","Do","Were"],0,"Pregunta en pasado simple → Did + sujeto + verbo base."],
["We ___ the project two weeks ago.",["have finished","finished","finish"],1,"«Ago» indica momento terminado → pasado simple."],
["He ___ a new car last month.",["buyed","bought","buys"],1,"Buy es irregular: bought."]]},

{id:"pastresp",t:"Past tense responses",es:"Respuestas cortas en pasado",url:"https://www.google.com/search?q=past+tense+short+answers+english",
exp:`<p>En inglés no se responde solo “yes” o “no”: se repite el <b>auxiliar</b>.</p>
<p><i>Did you call him? – Yes, I <b>did</b>. / No, I <b>didn't</b>.</i><br><i>Were they at home? – Yes, they <b>were</b>. / No, they <b>weren't</b>.</i><br><i>Had you met her before? – No, I <b>hadn't</b>.</i></p>
<p>Para mostrar interés: <i>“I went to Paris.” – “<b>Did you</b>? How was it?”</i> Para coincidir: <i>“I loved it.” – “<b>So did I</b>.” / “I didn't like it.” – “<b>Neither did I</b>.”</i></p>`,
ex:["Did you enjoy the trip? – Yes, I did.","“I didn't sleep well.” – “Neither did I.”"],
q:[["Did you finish your homework? – Yes, I ___.",["did","finished","do"],0,"Respuesta corta con el mismo auxiliar: did."],
["Was she at the meeting? – No, she ___.",["didn't","wasn't","weren't"],1,"La pregunta usa was → No, she wasn't."],
["“I saw a great movie last night.” – “___? Which one?”",["Did you","Were you","Do you"],0,"Para mostrar interés se repite el auxiliar: Did you?"],
["“I enjoyed the concert.” – “So ___ I.”",["was","did","do"],1,"Enjoyed es pasado simple → So did I."],
["“I didn't understand the class.” – “___ did I.”",["So","Neither","Either"],2,"Coincidir con una negativa → Neither did I."]]},

{id:"phrasal",t:"Phrasal verbs",es:"Verbos frasales",url:"https://www.google.com/search?q=B1+phrasal+verbs+list",
exp:`<p>Verbo + partícula que cambia el significado. Los más comunes en B1:</p>
<p><b>look for</b> (buscar), <b>look after</b> (cuidar), <b>look forward to</b> (esperar con ganas), <b>find out</b> (averiguar), <b>give up</b> (rendirse/dejar), <b>turn on/off</b> (encender/apagar), <b>set up</b> (instalar/organizar), <b>carry out</b> (realizar), <b>put off</b> (aplazar), <b>run out of</b> (quedarse sin), <b>get on with</b> (llevarse bien), <b>break down</b> (dañarse), <b>take off</b> (despegar/quitarse), <b>come up with</b> (inventar una idea), <b>figure out</b> (entender/resolver).</p>
<p>Algunos se pueden separar: <i>turn <b>it</b> off</i> (con pronombre, va en medio).</p>`,
ex:["I'm looking for my keys.","We ran out of time.","The engineers carried out several tests."],
q:[["My car ___ on the highway, so I called a mechanic.",["broke down","took off","gave up"],0,"Break down = dañarse (máquinas, carros)."],
["We have ___ printer paper. Can you buy more?",["run out of","looked after","set up"],0,"Run out of = quedarse sin algo."],
["I'm looking forward to ___ you.",["see","seeing","saw"],1,"En look forward to, «to» es preposición → va -ing."],
["She ___ smoking last year.",["gave up","put off","found out"],0,"Give up = dejar un hábito."],
["The team ___ a great idea for the project.",["came up with","got on with","turned off"],0,"Come up with = proponer/inventar una idea."]]},

{id:"prep",t:"Prepositions of place",es:"Preposiciones de lugar",url:"https://www.examenglish.com/grammar/b1_prepositions_of_place.htm",
exp:`<p><b>in</b> = dentro de, ciudades, países: <i>in the box, in Bogotá</i>. <b>on</b> = sobre una superficie, pisos, calles: <i>on the table, on the 3rd floor, on Main Street</i>. <b>at</b> = un punto o lugar específico: <i>at the door, at the university, at home, at 25 Main Street</i>.</p>
<p>Otras: <b>next to / beside</b> (al lado), <b>between</b> (entre dos), <b>among</b> (entre varios), <b>opposite</b> (enfrente), <b>in front of</b> (delante), <b>behind</b> (detrás), <b>above</b> (encima sin tocar), <b>below / under</b> (debajo), <b>across from</b> (al otro lado).</p>`,
ex:["The lab is on the second floor.","She's waiting at the bus stop.","The bank is opposite the park."],
q:[["My office is ___ the fifth floor.",["in","on","at"],1,"Pisos de un edificio → on."],
["I'll meet you ___ the entrance of the building.",["at","in","on"],0,"Un punto específico → at."],
["She lives ___ Medellín.",["at","on","in"],2,"Ciudades → in."],
["The pharmacy is ___ the bank and the supermarket.",["among","between","above"],1,"Entre dos cosas → between."],
["The lamp is hanging ___ the table.",["above","on","in"],0,"Encima sin tocar → above."]]},

{id:"ppcont",t:"Present perfect continuous",es:"Presente perfecto continuo",url:"https://www.examenglish.com/grammar/B1_presperf_continuous.htm",
exp:`<p><b>have/has been + verbo-ing</b>: algo que empezó en el pasado y <b>sigue hasta ahora</b> (o acaba de terminar y se ven los efectos). Se enfoca en la duración.</p>
<p><i>I <b>have been studying</b> English <b>for</b> two years.</i> / <i>She <b>has been working</b> here <b>since</b> 2021.</i><br><i>Why are you wet? – I<b>'ve been running</b>.</i></p>
<p><b>for</b> + periodo (for 3 hours), <b>since</b> + punto de inicio (since Monday). Pregunta típica: <i><b>How long have you been</b> waiting?</i></p>`,
ex:["We've been waiting for an hour.","How long have you been living here?"],
q:[["I ___ for the bus for 30 minutes.",["am waiting","have been waiting","waited"],1,"Empezó en el pasado y sigue → have been + -ing."],
["She has been working here ___ 2019.",["for","since","from"],1,"Punto de inicio (2019) → since."],
["How long ___ you been learning English?",["did","are","have"],2,"How long have you been + -ing?"],
["My eyes hurt because I ___ at the screen all day.",["have been looking","looked","am look"],0,"Actividad larga que explica un resultado presente → present perfect continuous."]]},

{id:"ppvsps",t:"Present perfect vs past simple",es:"Presente perfecto o pasado simple",url:"https://www.examenglish.com/grammar/b1_presentperfect_pastsimple.htm",
exp:`<p><b>Pasado simple</b>: momento terminado y específico: <i>yesterday, last year, in 2020, two days ago, when I was a child</i>.<br><i>I <b>visited</b> Cartagena <b>last year</b>.</i></p>
<p><b>Present perfect (have/has + participio)</b>: experiencias sin decir cuándo, o algo que conecta con el presente: <i>ever, never, already, yet, just, so far, this week, for, since</i>.<br><i>I <b>have visited</b> Cartagena three times. / <b>Have</b> you <b>ever been</b> to the USA? / I <b>haven't finished yet</b>.</i></p>
<p>Si dices CUÁNDO exactamente → pasado simple. Si no → present perfect.</p>`,
ex:["I have never been to Europe.","I went to Spain in 2019.","She has just arrived."],
q:[["I ___ my keys. I can't find them anywhere.",["lost","have lost","had lost"],1,"Resultado presente (no las encuentro ahora) → have lost."],
["We ___ to Cartagena in 2022.",["have gone","went","have been"],1,"Fecha específica → pasado simple."],
["___ you ever ___ a presentation in English?",["Did / give","Have / given","Have / gave"],1,"Ever + experiencia → present perfect: have … given."],
["She hasn't finished the report ___.",["yet","ago","last week"],0,"Yet va con present perfect en negativas y preguntas."],
["I ___ him two days ago.",["have seen","saw","have saw"],1,"«Ago» → pasado simple."]]},

{id:"reported",t:"Reported speech",es:"Estilo indirecto (lo que alguien dijo)",url:"https://www.examenglish.com/grammar/B1_reported_speech.htm",
exp:`<p>Para contar lo que otro dijo, el tiempo verbal <b>da un paso atrás</b>:</p>
<p>present simple → past simple: <i>“I <b>work</b> here.” → He said he <b>worked</b> there.</i><br>present continuous → past continuous · past simple / present perfect → past perfect · will → would · can → could.</p>
<p>También cambian pronombres y referencias: <i>today → that day, tomorrow → the next day, here → there</i>.</p>
<p><b>say</b> vs <b>tell</b>: <i>She <b>said</b> (that)… / She <b>told me</b> (that)…</i> (tell necesita a quién). Preguntas: <i>He asked me <b>where I lived</b>.</i> Órdenes: <i>She told me <b>to wait</b>.</i></p>`,
ex:["She said she was tired.","He told me he would call the next day.","They asked if I had finished."],
q:[["“I am busy.” → She said she ___ busy.",["is","was","has been"],1,"Present → past: am → was."],
["“I will help you.” → He said he ___ help me.",["will","would","can"],1,"Will → would."],
["“We finished the project.” → They said they ___ the project.",["had finished","have finished","finish"],0,"Past simple → past perfect: had finished."],
["She ___ me that she was leaving.",["said","told","asked"],1,"Tell + persona: told me. Say no lleva persona directa."],
["He asked me where ___.",["did I live","I lived","do I live"],1,"Pregunta reportada → orden normal, sin did: where I lived."]]},

{id:"passive",t:"Simple passive",es:"Voz pasiva",url:"https://www.examenglish.com/grammar/B1_simple_passives.htm",
exp:`<p>Se usa cuando lo importante es la acción o el objeto, no quién la hace. Estructura: <b>to be + participio</b>.</p>
<p>Presente: <i>English <b>is spoken</b> worldwide.</i> · Pasado: <i>The bridge <b>was built</b> in 1990.</i> · Present perfect: <i>The report <b>has been sent</b>.</i> · Futuro: <i>It <b>will be finished</b> tomorrow.</i> · Modal: <i>It <b>must be done</b>.</i></p>
<p>Quién lo hizo se dice con <b>by</b>: <i>The software was developed <b>by</b> our team.</i></p>`,
ex:["The results were published last week.","Coffee is grown in Colombia.","The meeting has been cancelled."],
q:[["This house ___ in 1950.",["built","was built","is build"],1,"Pasiva en pasado: was + participio."],
["Spanish ___ in many countries.",["is spoken","speaks","is speaking"],0,"Pasiva en presente: is + participio."],
["The new bridge ___ next year.",["will build","will be built","is built"],1,"Pasiva futura: will be + participio."],
["The email has ___ to all employees.",["sent","been sent","be sent"],1,"Present perfect pasivo: has been + participio."],
["“Hamlet” was written ___ Shakespeare.",["for","from","by"],2,"El autor de la acción en la pasiva va con by."]]},

{id:"whpast",t:"Wh- questions in the past",es:"Preguntas con Wh- en pasado",url:"https://www.google.com/search?q=wh+questions+past+simple",
exp:`<p><b>Wh- + did + sujeto + verbo base</b>: <i><b>Where did</b> you <b>go</b>? / <b>What did</b> she <b>say</b>? / <b>Why did</b> they <b>leave</b>?</i></p>
<p>Con to be: <b>Wh- + was/were + sujeto</b>: <i>Where <b>were</b> you? / Why <b>was</b> he late?</i></p>
<p><b>Cuidado:</b> si la pregunta es sobre el <b>sujeto</b> (who/what hizo algo), NO se usa did: <i><b>Who called</b> you? / <b>What happened</b>?</i></p>`,
ex:["What did you do last weekend?","Where were you born?","Who won the game?"],
q:[["Where ___ you go on vacation?",["did","were","do"],0,"Wh- + did + sujeto + verbo base."],
["What time ___ the meeting start yesterday?",["was","did","does"],1,"Pasado con verbo principal (start) → did."],
["Why ___ you late this morning?",["did","were","was"],1,"Con adjetivo (late) usamos to be: were you."],
["Who ___ the window?",["did break","broke","did broke"],1,"Pregunta sobre el sujeto → sin did: Who broke…?"],
["What ___ she say to you?",["did","does","was"],0,"What did + sujeto + verbo base."]]},

{id:"willgoing",t:"Will and going to (prediction)",es:"Will y going to para predecir",url:"https://www.google.com/search?q=will+vs+going+to+prediction",
exp:`<p><b>will</b>: predicción basada en opinión o creencia (I think, probably, I'm sure): <i>I think it <b>will</b> rain tomorrow.</i> También decisiones del momento y promesas: <i>I'll help you!</i></p>
<p><b>going to</b>: predicción basada en <b>evidencia que vemos ahora</b>: <i>Look at those clouds! It<b>'s going to</b> rain.</i> También planes ya decididos: <i>I'm going to study engineering.</i></p>`,
ex:["I'm sure you'll pass the exam.","Be careful! You're going to fall!"],
q:[["Look at those black clouds! It ___ rain.",["will","is going to","goes"],1,"Hay evidencia visible → going to."],
["I think technology ___ change a lot in the future.",["is going to","will","going"],1,"Predicción basada en opinión (I think) → will."],
["Watch out! That glass ___ fall!",["will","is going to","falls"],1,"Lo vemos a punto de pasar → going to."],
["“The phone is ringing.” – “I ___ answer it.”",["am going to","will","answer"],1,"Decisión tomada en el momento → will."],
["She has bought the tickets. She ___ travel to Peru next month.",["will","is going to","travels"],1,"Plan ya decidido → going to."]]}
];
