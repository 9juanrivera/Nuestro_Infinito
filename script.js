const START_DATE = new Date(2025, 10, 11, 0, 0, 0);
const DEFAULT_LANG = "en";

const TIMELINE = [
  {
    date: "11 nov 2025",
    title: {
      es: "El día uno",
      en: "Day one",
      pt: "O dia um"
    },
    text: {
      es: "El día que me dijiste que sí fue la acumulación de sentimientos más grande que había sentido en mi vida. Sentí, en un solo instante, cómo todos esos años de intentos y de formas de demostrarte que no eras un capricho, sino la mujer que me había vuelto loco desde el primer minuto en que te vi, finalmente habían encontrado su lugar. Y no sabes cómo me sentí al ver esa sonrisa mientras me decías que sí; ese abrazo y ese beso que marcaron un antes y un después en mi vida. Fue el momento en el que se abrió la puerta para descubrir a la mejor persona que he podido conocer, una persona que no solo me hizo querer ser mejor, sino que me hizo levantarme cada día con ganas de intentarlo, de convertirme en la mejor versión de mí mismo para poder estar a tu lado. Y creo que ahí es donde realmente nace el amor que te tengo: en que todo lo que hice, todo lo que intenté y todo lo que quise mejorar, lo hice por ti. Por una persona que, aun con mis errores, supo curarme, apoyarme y transformar mi vida por completo. Por eso, cuando pienso en aquel día, no pienso solamente en el momento en que me dijiste que sí, sino en todo lo que significó llegar hasta él y en todo lo que comenzó después. Y si tuviera que resumir todo lo que siento en una sola palabra, después de todo lo que hemos vivido, solo podría decirte una cosa: te amo.",
      en: "The day you said yes was the greatest accumulation of feelings I had ever felt in my life. In a single moment, I felt how all those years of trying and finding ways to show you that you were not just a passing feeling, but the woman who had driven me crazy from the very first moment I saw you, had finally found their place. And you have no idea how I felt when I saw that smile as you said yes; that hug and that kiss that marked a before and after in my life. It was the moment when a door opened to discover the best person I have ever known, someone who not only made me want to be better, but made me get up every day wanting to try, wanting to become the best version of myself so I could be by your side. And I think that is where the love I have for you truly began: in knowing that everything I did, everything I tried, and everything I wanted to improve, I did for you. For someone who, even with my mistakes, knew how to heal me, support me, and completely transform my life. That is why, when I think about that day, I do not only think about the moment you said yes, but about everything it meant to get there and everything that began afterward. And if I had to sum up everything I feel in one word, after everything we have lived, I could only tell you one thing: I love you.",
      pt: "O dia em que você disse sim foi o maior acúmulo de sentimentos que eu já senti na minha vida. Em um único instante, senti como todos aqueles anos de tentativas e de formas de mostrar que você não era um capricho, mas a mulher que tinha me deixado louco desde o primeiro minuto em que te vi, finalmente tinham encontrado seu lugar. E você não sabe como eu me senti ao ver aquele sorriso enquanto você dizia sim; aquele abraço e aquele beijo que marcaram um antes e um depois na minha vida. Foi o momento em que uma porta se abriu para eu descobrir a melhor pessoa que já conheci, uma pessoa que não só me fez querer ser melhor, mas me fez levantar todos os dias com vontade de tentar, de me tornar a melhor versão de mim mesmo para poder estar ao seu lado. E acho que é aí que realmente nasce o amor que sinto por você: em saber que tudo o que fiz, tudo o que tentei e tudo o que quis melhorar, fiz por você. Por uma pessoa que, mesmo com os meus erros, soube me curar, me apoiar e transformar completamente a minha vida. Por isso, quando penso naquele dia, não penso apenas no momento em que você disse sim, mas em tudo o que significou chegar até ele e em tudo o que começou depois. E se eu tivesse que resumir tudo o que sinto em uma única palavra, depois de tudo o que vivemos, só poderia te dizer uma coisa: eu te amo."
    }
  },
  {
    date: "dic 2025",
    title: {
      es: "Primera Navidad juntos",
      en: "Our first Christmas",
      pt: "Nosso primeiro Natal"
    },
    text: {
      es: "Ese diciembre fue diferente, no sé si fue por las fechas, por todo lo que estábamos viviendo o simplemente porque estaba contigo, pero se sintió mucho más especial. Era la primera vez que podía vivir un diciembre teniendo a la persona que quería a mi lado, y creo que eso hizo que cada momento tuviera algo distinto. Las luces, los planes, los días juntos, hasta las cosas más pequeñas se sentían mejor porque estabas tú. Y creo que desde ahí entendí que cualquier fecha puede ser especial, pero cuando la comparto contigo, simplemente se vuelve inolvidable.",
      en: "That December felt different. I don't know if it was because of the dates, everything we were living, or simply because I was with you, but it felt much more special. It was the first time I could live through December with the person I wanted by my side, and I think that made every moment feel different. The lights, the plans, the days together, even the smallest things felt better because you were there. And I think that was when I understood that any date can be special, but when I share it with you, it simply becomes unforgettable.",
      pt: "Aquele dezembro foi diferente, não sei se foi pelas datas, por tudo o que estávamos vivendo ou simplesmente porque eu estava com você, mas tudo pareceu muito mais especial. Foi a primeira vez que pude viver um dezembro tendo ao meu lado a pessoa que eu queria, e acho que isso fez cada momento ter algo diferente. As luzes, os planos, os dias juntos, até as coisas mais pequenas pareciam melhores porque você estava comigo. E acho que foi aí que entendi que qualquer data pode ser especial, mas quando eu compartilho ela com você, simplesmente se torna inesquecível."
    }
  },
  {
    date: "ene 2026",
    title: {
      es: "Una costumbre nueva",
      en: "A new habit",
      pt: "Um novo costume"
    },
    text: {
      es: "En enero empezamos una costumbre que, aunque parecía algo sencillo, terminó significando mucho para nosotros: amarnos mucho más. Fue muy especial porque, aunque no compartimos tanto como hubiéramos querido, todo se mantuvo vivo. Seguíamos pensando el uno en el otro y encontrando la manera de sentirnos cerca incluso cuando no podíamos estarlo tanto. Y creo que eso hizo que entendiera todavía más que lo nuestro no depende solamente de estar juntos todo el tiempo, sino de todo lo que sentimos incluso cuando estamos separados.",
      en: "In January we started a new habit that, although it seemed simple, ended up meaning a lot to us: loving each other even more. It was very special because, even though we did not share as much time as we would have liked, everything stayed alive. We kept thinking about each other and finding ways to feel close even when we could not be together as much. And I think that made me understand even more that what we have does not depend only on being together all the time, but on everything we feel even when we are apart.",
      pt: "Em janeiro começamos um costume que, apesar de parecer simples, acabou significando muito para nós: nos amar ainda mais. Foi muito especial porque, mesmo não compartilhando tanto tempo quanto gostaríamos, tudo continuou vivo. Continuávamos pensando um no outro e encontrando maneiras de nos sentir perto mesmo quando não podíamos estar juntos tanto. E acho que isso me fez entender ainda mais que o que temos não depende apenas de estarmos juntos o tempo todo, mas de tudo o que sentimos mesmo quando estamos separados."
    }
  },
  {
    date: "11 feb 2026",
    title: {
      es: "Tres meses",
      en: "Three months",
      pt: "Três meses"
    },
    text: {
      es: "Febrero fue muy especial por el cumpleaños que me celebraste el 9. Fue el mejor cumpleaños de mi vida y todo fue demasiado hermoso. Sentir todo el cariño que pusiste en ese día y poder vivirlo de una manera tan especial hizo que se quedara conmigo como uno de esos recuerdos que sé que nunca voy a olvidar. Y más allá de la celebración, lo que realmente hizo especial ese momento fue tenerte a ti, porque cada detalle se sintió diferente simplemente porque venía de la persona que amo.",
      en: "February was very special because of the birthday you celebrated for me on the 9th. It was the best birthday of my life, and everything was so beautiful. Feeling all the love you put into that day and being able to experience it in such a special way made it one of those memories I know I will never forget. And beyond the celebration itself, what truly made that moment special was having you there, because every detail felt different simply because it came from the person I love.",
      pt: "Fevereiro foi muito especial por causa do aniversário que você comemorou comigo no dia 9. Foi o melhor aniversário da minha vida e tudo foi lindo demais. Sentir todo o carinho que você colocou naquele dia e poder vivê-lo de uma forma tão especial fez com que ele se tornasse uma daquelas lembranças que eu sei que nunca vou esquecer. E além da comemoração, o que realmente tornou aquele momento especial foi ter você comigo, porque cada detalhe pareceu diferente simplesmente por vir da pessoa que eu amo."
    }
  },
  {
    date: "mar 2026",
    title: {
      es: "Algo hecho para nosotros",
      en: "Something made for us",
      pt: "Algo feito para nós"
    },
    text: {
      es: "En marzo hice algo que tenía mucho de nosotros: una aplicación móvil con un carrusel de fotos de los dos. Puede parecer algo pequeño, pero para mí tenía un significado especial, porque era una forma de guardar nuestros momentos en algo que yo mismo había creado. Cada foto, cada recuerdo y cada detalle de esa aplicación llevaba un pedacito de nuestra historia. Y creo que eso fue lo bonito, poder convertir algo que sentía por ti en algo que pudiera ver y guardar, algo hecho por mí para nosotros.",
      en: "In March, I made something that had a lot of us in it: a mobile app with a carousel of pictures of the two of us. It might seem like something small, but to me it had a special meaning, because it was a way of keeping our moments in something I had created myself. Every picture, every memory, and every detail of that app carried a little piece of our story. And I think that was the beautiful part, being able to turn something I felt for you into something I could see and keep, something I made for us.",
      pt: "Em março, fiz algo que tinha muito de nós: um aplicativo para celular com um carrossel de fotos nossas. Pode parecer algo pequeno, mas para mim tinha um significado especial, porque era uma forma de guardar nossos momentos em algo que eu mesmo tinha criado. Cada foto, cada lembrança e cada detalhe daquele aplicativo carregava um pedacinho da nossa história. E acho que essa foi a parte mais bonita, poder transformar algo que eu sentia por você em algo que eu pudesse ver e guardar, algo feito por mim para nós."
    }
  },
  {
    date: "abr 2026",
    title: {
      es: "Un mes especial",
      en: "A special month",
      pt: "Um mês especial"
    },
    text: {
      es: "Abril fue un mes muy especial. Compartimos mucho y me hiciste vivir experiencias que me maravillaron. Pero también hubo algo que hizo que todo se sintiera todavía mejor: lo mucho que tu familia me acogió. Sentirme recibido, poder compartir con ellos y sentirme tan bien a su lado fue algo que guardo con mucho cariño. Fue un mes lleno de momentos que me hicieron sentir todavía más cerca de ti y de todo lo que forma parte de tu vida.",
      en: "April was a very special month. We shared a lot and you gave me experiences that amazed me. But there was also something that made everything feel even better: how warmly your family welcomed me. Feeling accepted, being able to spend time with them, and feeling so comfortable around them is something I carry with a lot of affection. It was a month full of moments that made me feel even closer to you and to everything that is part of your life.",
      pt: "Abril foi um mês muito especial. Compartilhamos muito e você me fez viver experiências que me maravilharam. Mas também houve algo que fez tudo parecer ainda melhor: o quanto sua família me acolheu. Me sentir recebido, poder compartilhar momentos com eles e me sentir tão bem ao lado deles é algo que guardo com muito carinho. Foi um mês cheio de momentos que me fizeram sentir ainda mais perto de você e de tudo o que faz parte da sua vida."
    }
  },
  {
    date: "11 may 2026",
    title: {
      es: "Una constelación de nosotros",
      en: "A constellation of us",
      pt: "Uma constelação de nós"
    },
    text: {
      es: "Ese tiempo fue un poco más difícil para nosotros. Hubo momentos que no fueron fáciles, pero creo que lo más importante fue que supimos sobrellevarlos de la mejor manera. A pesar de las dificultades, seguimos estando el uno para el otro y aprendimos que no todo en una relación siempre va a ser perfecto, pero que mientras los dos queramos seguir adelante, siempre habrá una manera de superar lo que venga. Si miro hacia atrás y pienso en todo lo que hemos vivido desde aquel 11 de noviembre, siento que cada mes fue dejando una pequeña estrella en nuestra historia. Noviembre fue el comienzo, diciembre tuvo su propia magia, enero nos enseñó a seguir amándonos incluso cuando no compartíamos tanto, febrero me regaló uno de los recuerdos más hermosos de mi vida, marzo fue algo que hice para nosotros y abril estuvo lleno de experiencias que me maravillaron y de una familia que me hizo sentir acogido. Y ahora, mirando todas esas estrellas juntas, siento que empiezan a formar algo, como una pequeña constelación con nuestra propia forma. Una S, como si todos esos momentos, incluso los difíciles, hubieran estado conectados desde el principio para llevarnos hasta aquí. Porque no todo ha sido fácil, pero supimos sobrellevarlo de la mejor manera y seguir estando el uno para el otro. Y quizá eso es lo más bonito de nuestra historia: que cada momento, bueno o difícil, terminó convirtiéndose en una estrella más de algo que seguimos construyendo juntos.",
      en: "That time was a little more difficult for us. There were moments that were not easy, but I think the most important thing was that we knew how to get through them in the best way we could. Despite the difficulties, we continued being there for each other and learned that things in a relationship will not always be perfect, but as long as we both want to keep moving forward, there will always be a way to overcome whatever comes our way. When I look back and think about everything we have lived since that November 11th, I feel like every month left a little star in our story. November was the beginning, December had its own kind of magic, January taught us to keep loving each other even when we could not share as much, February gave me one of the most beautiful memories of my life, March was something I made for us, and April was filled with experiences that amazed me and with a family that made me feel welcomed. And now, looking at all those stars together, I feel like they are beginning to form something, like a little constellation with a shape of its own. An S, as if all those moments, even the difficult ones, had been connected from the very beginning to bring us here. Because not everything has been easy, but we knew how to get through it in the best way we could and keep being there for each other. And maybe that is the most beautiful thing about our story: every moment, good or difficult, became another star in something we are still building together.",
      pt: "Aquele período foi um pouco mais difícil para nós. Tivemos momentos que não foram fáceis, mas acho que o mais importante foi que soubemos lidar com tudo da melhor maneira possível. Apesar das dificuldades, continuamos estando um ao lado do outro e aprendemos que nem tudo em um relacionamento vai ser perfeito, mas enquanto os dois quiserem seguir em frente, sempre vai existir uma maneira de superar o que vier. Quando olho para trás e penso em tudo que vivemos desde aquele 11 de novembro, sinto que cada mês deixou uma pequena estrela na nossa história. Novembro foi o começo, dezembro teve sua própria magia, janeiro nos ensinou a continuar nos amando mesmo quando não podíamos compartilhar tanto, fevereiro me deu uma das lembranças mais bonitas da minha vida, março foi algo que fiz para nós e abril foi cheio de experiências que me maravilharam e de uma família que me fez sentir acolhido. E agora, olhando para todas essas estrelas juntas, sinto que elas começam a formar alguma coisa, como uma pequena constelação com a nossa própria forma. Um S, como se todos esses momentos, até os mais difíceis, estivessem conectados desde o começo para nos trazer até aqui. Porque nem tudo foi fácil, mas soubemos lidar com tudo da melhor maneira e continuar estando um ao lado do outro. E talvez essa seja a coisa mais bonita da nossa história: cada momento, bom ou difícil, acabou se tornando mais uma estrela de algo que ainda estamos construindo juntos."
    }
  },
  {
    date: "jun 2026",
    title: {
      es: "Una estrella más",
      en: "One more star",
      pt: "Mais uma estrela"
    },
    text: {
      es: "Junio fue diferente, pero quizá eso también tenga algo bonito. Nuestra relación no se basa solamente en momentos especiales, porque al final cada día que compartimos forma parte de nuestra historia. No importa si los momentos son buenos o malos, siempre terminamos aprendiendo de ellos, adaptándonos y encontrando la manera de seguir adelante juntos. Después de mirar todas las estrellas que fuimos dejando desde noviembre, entendí que cada una representa algo que vivimos, algo que sentimos o algo que aprendimos juntos. Y entonces pensé que junio podía ser simplemente una estrella más, una que se une a todas las anteriores y hace que nuestra pequeña constelación siga creciendo. Porque cada estrella representa una parte de nosotros, y juntas forman algo que solo nosotros podemos entender. Y quizá eso sea lo más bonito: que mientras seguimos viviendo, seguimos agregando estrellas a una historia que todavía no termina, porque al final, cuando estamos juntos, los dos brillamos con mucha intensidad.",
      en: "June was different, but maybe there is something beautiful about that too. Our relationship is not based only on special moments, because in the end, every day we share becomes part of our story. It does not matter if the moments are good or difficult, we always end up learning from them, adapting, and finding a way to keep moving forward together. After looking at all the stars we have left behind since November, I realized that each one represents something we lived, something we felt, or something we learned together. And then I thought that June could simply be one more star, joining all the others and making our little constellation keep growing. Because every star represents a part of us, and together they form something only we can understand. And maybe that is the most beautiful thing: while we keep living, we keep adding stars to a story that is not finished yet, because in the end, when we are together, we both shine with so much intensity.",
      pt: "Junho foi diferente, mas talvez exista algo bonito nisso também. Nosso relacionamento não se baseia apenas em momentos especiais, porque, no fim, cada dia que compartilhamos faz parte da nossa história. Não importa se os momentos são bons ou difíceis, sempre acabamos aprendendo com eles, nos adaptando e encontrando uma maneira de seguir em frente juntos. Depois de olhar para todas as estrelas que fomos deixando desde novembro, percebi que cada uma representa algo que vivemos, sentimos ou aprendemos juntos. E então pensei que junho poderia ser simplesmente mais uma estrela, se juntando a todas as outras e fazendo a nossa pequena constelação continuar crescendo. Porque cada estrela representa uma parte de nós, e juntas formam algo que só nós podemos entender. E talvez essa seja a coisa mais bonita: enquanto continuamos vivendo, continuamos adicionando estrelas a uma história que ainda não terminou, porque, no fim, quando estamos juntos, nós dois brilhamos com muita intensidade."
    }
  },
  {
    date: "jul 2026",
    title: {
      es: "Mi mundo entero",
      en: "My whole world",
      pt: "Meu mundo inteiro"
    },
    text: {
      es: "Julio simplemente me hizo recordar algo que nunca quiero olvidar: lo mucho que te amo. Eres mi mundo entero, y no puedo imaginar mi vida sin ti. Eres el mejor apoyo que podría pedir, la persona que está ahí para mí y que hace que incluso los días más difíciles sean mucho más fáciles. A veces pienso en lo extraño y hermoso que es el universo, en cómo las matemáticas pueden explicar la forma de las órbitas, la distancia entre las estrellas y hasta los patrones que existen en lugares que jamás hemos visto. Y aun así, entre tantas cosas que pueden calcularse, siento que hay algo que ninguna fórmula podría explicar por completo: lo hermosa que eres para mí. Quizá tenga sentido que te sientas tan cerca de las estrellas, porque de alguna manera estamos hechos de los mismos elementos que alguna vez estuvieron en ellas. Y si el universo pudo crear algo tan inmenso y hermoso, también pudo crearme la suerte de encontrarte a ti. Porque cuando estamos juntos, siento que los dos brillamos con una intensidad que ninguna estrella podría medir.",
      en: "July simply reminded me of something I never want to forget: how much I love you. You are my whole world, and I cannot imagine my life without you. You are the best support I could ever ask for, the person who is there for me and makes even the hardest days feel much easier. Sometimes I think about how strange and beautiful the universe is, how mathematics can explain the shape of orbits, the distance between stars, and even patterns that exist in places we have never seen. And yet, among all the things that can be calculated, I feel there is something no formula could ever completely explain: how beautiful you are to me. Maybe it makes sense that you feel so close to the stars, because in a way we are made from some of the same elements that once existed inside them. And if the universe could create something so immense and beautiful, it could also give me the luck of finding you. Because when we are together, I feel like we both shine with an intensity that no star could measure.",
      pt: "Julho simplesmente me fez lembrar de algo que nunca quero esquecer: o quanto eu te amo. Você é o meu mundo inteiro, e eu não consigo imaginar a minha vida sem você. Você é o melhor apoio que eu poderia pedir, a pessoa que está ao meu lado e que faz até os dias mais difíceis ficarem muito mais fáceis. Às vezes penso em como o universo é estranho e bonito, em como a matemática consegue explicar a forma das órbitas, a distância entre as estrelas e até padrões que existem em lugares que nunca vimos. E mesmo assim, entre tantas coisas que podem ser calculadas, sinto que existe algo que nenhuma fórmula poderia explicar completamente: o quanto você é linda para mim. Talvez faça sentido você se sentir tão próxima das estrelas, porque, de certa forma, somos feitos de alguns dos mesmos elementos que um dia estiveram dentro delas. E se o universo conseguiu criar algo tão imenso e bonito, também conseguiu me dar a sorte de encontrar você. Porque quando estamos juntos, sinto que nós dois brilhamos com uma intensidade que nenhuma estrela poderia medir."
    }
  },
  {
    date: "ago 2026",
    title: {
      es: "Lo que seguimos construyendo",
      en: "What we keep building",
      pt: "O que continuamos construindo"
    },
    text: {
      es: "Agosto me hizo pensar en todas las estrellas que hemos ido dejando en el camino. Cada una representa un mes, un recuerdo, una dificultad, una alegría o simplemente una parte de nosotros que fuimos construyendo juntos. Algunas brillan por momentos que jamás quiero olvidar y otras por momentos que nos enseñaron a entendernos, adaptarnos y seguir adelante. Y cuando miro todas esas estrellas juntas, me doy cuenta de que nuestra constelación todavía está lejos de estar completa. Todavía quedan muchísimas estrellas por agregar, muchísimas cosas por vivir y muchísimas páginas por escribir. Y eso es lo que más me gusta de todo esto: saber que nuestra historia no termina en lo que ya vivimos, sino que cada día tenemos la oportunidad de agregar algo nuevo a ella. Porque si hay algo que me gusta del infinito, es que no tiene un final que podamos alcanzar, y quizá eso sea lo que quiero para nosotros: seguir avanzando, seguir agregando estrellas y seguir construyendo algo que nunca deje de crecer. Si todas estas estrellas son lo que hemos construido hasta ahora, quiero que nuestra constelación siga creciendo hasta donde llegue el infinito.",
      en: "August made me think about all the stars we have left along the way. Each one represents a month, a memory, a difficult moment, a happy moment, or simply a part of us that we built together. Some shine because of moments I never want to forget, while others shine because of moments that taught us to understand each other, adapt, and keep moving forward. And when I look at all those stars together, I realize that our constellation is still far from complete. There are still so many stars to add, so many things to experience, and so many pages left to write. And that is what I love most about all of this: knowing that our story does not end with everything we have already lived, but that every day we have the chance to add something new to it. Because if there is something I love about infinity, it is that there is no ending we can ever reach, and maybe that is what I want for us: to keep moving forward, keep adding stars, and keep building something that never stops growing. If all these stars are what we have built so far, I want our constellation to keep growing as far as infinity reaches.",
      pt: "Agosto me fez pensar em todas as estrelas que fomos deixando pelo caminho. Cada uma representa um mês, uma lembrança, uma dificuldade, uma alegria ou simplesmente uma parte de nós que fomos construindo juntos. Algumas brilham por momentos que nunca quero esquecer, enquanto outras brilham por momentos que nos ensinaram a nos entender, nos adaptar e continuar seguindo em frente. E quando olho para todas essas estrelas juntas, percebo que a nossa constelação ainda está longe de estar completa. Ainda existem muitas estrelas para adicionar, muitas coisas para viver e muitas páginas para escrever. E isso é o que eu mais gosto em tudo isso: saber que a nossa história não termina no que já vivemos, mas que todos os dias temos a oportunidade de acrescentar algo novo a ela. Porque se existe algo que eu gosto no infinito, é que não existe um fim que possamos alcançar, e talvez seja isso que eu quero para nós: continuar seguindo em frente, continuar adicionando estrelas e continuar construindo algo que nunca deixe de crescer. Se todas essas estrelas são tudo o que construímos até agora, quero que a nossa constelação continue crescendo até onde o infinito alcançar."
    }
  }
];

const PATH_CARDS = [
  {
    date: "antes de nov 2025 / before nov 2025 / antes de nov 2025",
    title: {
      es: "Cómo nos conocimos",
      en: "How we met",
      pt: "Como a gente se conheceu"
    },
    text: {
      es: "Fue en aquel primer cruce de caminos donde empezó toda esta historia. Quién iba a decir que algo tan sencillo se convertiría en este amorzote que tenemos hoy, ¿no?",
      en: "It was at that first crossing of paths where this whole story began. Who would've thought something so simple would turn into this huge love we have today?",
      pt: "Foi naquele primeiro encontro de caminhos que começou essa história toda. Quem diria que uma coisa tão simples ia virar esse amorzão que a gente tem hoje, né?"
    }
  },
  {
    date: "nov 2025",
    title: {
      es: "La primera cita",
      en: "The first date",
      pt: "O primeiro encontro"
    },
    text: {
      es: "Ese día de nervios, de miradas medio torpes y ese cosquilleo en el estómago. Los dos tratando de aparentar tranquilidad, pero por dentro era un caos hermoso.",
      en: "That day full of nerves, awkward glances, and butterflies in the stomach. Both of us trying to act calm, while inside it was a beautiful mess.",
      pt: "Aquele dia dos nervos, dos olhares meio sem jeito e daquele friozinho na barriga. A gente tentando pagar de tranquilo, mas por dentro tava era uma bagunça boa."
    }
  },
  {
    date: "2025",
    title: {
      es: "El primer 'te amo'",
      en: "The first 'I love you'",
      pt: "O primeiro 'eu te amo'"
    },
    text: {
      es: "Llegó un momento en que ya no podía guardármelo más. El corazón estaba demasiado lleno y salió ese 'te amo'. Y desde entonces, mi amor, todo fue cuesta abajo... de tanto amor, claro.",
      en: "There came a moment I just couldn't hold it in anymore. My heart was too full and that 'I love you' came out. And ever since then, my love, it's just been downhill... from so much love, of course.",
      pt: "Chegou uma hora que não dava mais pra guardar. O coração tava cheio demais e saiu aquele 'eu te amo'. E desde então, meu amor, foi só ladeira abaixo... de tanto amor, claro."
    }
  },
  {
    date: "2026",
    title: {
      es: "Un viaje juntos",
      en: "A trip together",
      pt: "Uma viagem nossa"
    },
    text: {
      es: "Ese plan que nos sacó de la rutina y se volvió uno de esos recuerdos que quedan para siempre. Porque viajar contigo es demasiado bueno, hasta cuando se complica el camino.",
      en: "That trip that pulled us out of the routine and became one of those memories that last forever. Because traveling with you is amazing, even when things get bumpy along the way.",
      pt: "Aquele rolê que tirou a gente da rotina e virou memória daquelas que ficam pra sempre. Porque viajar contigo é bom demais, até quando dá algum perrengue no caminho."
    }
  },
  {
    date: "2026",
    title: {
      es: "Una risa que no se olvida",
      en: "A laugh you'll never forget",
      pt: "Uma risada inesquecível"
    },
    text: {
      es: "Esa tontería que nos hizo reír como dos tontos. Y lo peor es que hasta hoy, con solo recordarlo, ya nos volvemos a reír. Esos son los mejores recuerdos.",
      en: "That silly thing that had us laughing like two fools. And the funny part is that even now, just remembering it makes us laugh all over again. Those are the best memories.",
      pt: "Aquela besteira que fez a gente rir igual dois idiotas. E o pior é que até hoje basta lembrar que já começa a risada de novo. Essas são as melhores memórias, véi."
    }
  },
  {
    date: "2025–2026",
    title: {
      es: "Un momento difícil, juntos",
      en: "A hard moment, together",
      pt: "Um momento difícil, mas nós dois"
    },
    text: {
      es: "No todo fue fácil, y lo sabemos. Pero hasta en los días más difíciles seguimos juntos, nos cuidamos y le encontramos la vuelta. Al final, eso es lo que hace que nuestro amor sea aún más fuerte.",
      en: "Not everything was easy, and we both know it. But even on the hardest days we stayed together, took care of each other, and found a way through. In the end, that's what makes our love even stronger.",
      pt: "Nem tudo foi moleza, e a gente sabe disso. Mas até nos dias mais chatos a gente ficou junto, se cuidou e deu um jeito. No fim das contas, é isso que deixa nosso amor ainda mais forte."
    }
  },
  {
    date: "2025–2026",
    title: {
      es: "Nuestra canción",
      en: "Our song",
      pt: "Nossa música"
    },
    text: {
      es: "Esa canción que suena y ya está: llega el recuerdo de los dos. Hay canciones que no son solo canciones, ¿no? Se vuelven abrazo, beso, nostalgia y mucho cariño.",
      en: "That song that starts playing and instantly brings back the memory of us. Some songs aren't just songs, you know? They become a hug, a kiss, longing, and a whole lot of love.",
      pt: "Aquela música que toca e pronto: já bate a lembrança de nós dois. Tem música que não é só música, né? Vira abraço, beijo, saudade e um monte de amorzinho."
    }
  },
  {
    date: "próximamente / soon / em breve",
    title: {
      es: "Un plan pendiente",
      en: "Something still to do",
      pt: "Um rolê que ainda falta"
    },
    text: {
      es: "Porque todavía nos falta hacer un montón de cosas, conocer lugares y armar historias juntos. Así que ya sabes: nuestra lista está lejos de terminar, mi amor.",
      en: "Because there's still so much left for us to do, places to discover, and stories to make together. So you already know: our list is far from over, my love.",
      pt: "Porque ainda tem um monte de coisa pra gente fazer, lugar pra conhecer e história pra aprontar juntos. Então já sabe: nossa lista tá longe de acabar, meu bem."
    }
  },
  {
    date: "hoy / today / hoje",
    title: {
      es: "Catorce meses Juntos",
      en: "Fourteen months together",
      pt: "Catorze meses juntos"
    },
    text: {
      es: "Hoy solo quiero agradecer cada día, cada abrazo, cada risa y cada pedacito de cariño que me das. Te amo muchísimo, mi amor. Y, sin rodeos, espero vivir muchísimos meses más contigo.",
      en: "Today I just want to thank you for every day, every hug, every laugh, and every little bit of love you give me. I love you so much, my love. And honestly, I hope to live many, many more months with you.",
      pt: "Hoje eu só quero agradecer por cada dia, cada abraço, cada risada e cada pedacinho de carinho que você me dá. Eu te amo pra caramba, meu amorzinho. E, papo reto, espero viver muitos e muitos outros meses contigo."
    }
  }
];

const I18N = {
  en: {
    "nav.inicio": "Home",
    "nav.contador": "Counter",
    "nav.cronograma": "Timeline",
    "nav.camino": "Path",
    "hero.eyebrow": "fourteen months of",
    "hero.title1": "Our",
    "hero.title2": "Little",
    "hero.title3": "Infinity",
    "hero.sub": "Since November 11, 2025, by the side of the love of my life.",
    "hero.liveLabel": "days together, and counting",
    "hero.btnCounter": "Our time together",
    "hero.btnPath": "A journey through our path",
    "hero.scrollHint": "there's more, still unwritten",
    "hero.sign": "Maybe my heart doesn't work perfectly, but there's one thing it has always known how to do: be yours. It was from the very beginning, it still is now, and as long as it keeps beating, it always will be.",
    "counter.eyebrow": "Our Little Infinity",
    "counter.title": "Every unit, counting",
    "counter.sub": "It's only time, but I want to count it with you.",
    "counter.years": "years",
    "counter.months": "months",
    "counter.days": "days",
    "counter.hours": "hours",
    "counter.minutes": "min",
    "counter.seconds": "sec",
    "counter.footnote": "Mathematically, we can never fully count or measure infinity, but we do know that some infinities are bigger than others, more immense, more immeasurable. I know something like that is hard to grasp, but I think love can feel a lot the same way. Because when you find someone so special that time becomes both the thing that passes fastest and the thing you miss the most, you start to understand that even if we could count every second, every minute, every day by their side, time never stops being just time. It could be a thousand days, a million moments, or a whole lifetime, and still, when I'm with you, everything seems to pass in the blink of an eye. And maybe that's why I don't need to know how much time we have left, I just want to live every instant with you. Because I'm going to love you no matter how much time passes, more than yesterday, but less than tomorrow; and no matter what happens, how much time goes by, or how much the world changes, there's one thing that will never change: that I love you.",
    "timeline.eyebrow": "Our connection",
    "timeline.title": "A small constellation of moments",
    "timeline.sub": "The points connecting November 11, 2025 to today.",
    "path.eyebrow": "nine stops",
    "path.title": "Our path",
    "path.sub": "From heliocorr, with a lot of love.",
    "path.hint": "with love, for the love of my life",
    "modal.stop": "Stop {n} of 9",
    "modal.close": "Close"
  },

  pt: {
    "nav.inicio": "Início",
    "nav.contador": "Contador",
    "nav.cronograma": "Nossa história",
    "nav.camino": "Nosso caminho",
    "hero.eyebrow": "catorze meses de",
    "hero.title1": "Nosso",
    "hero.title2": "Pequeno",
    "hero.title3": "Infinito",
    "hero.sub": "Desde 11 de novembro de 2025, ao lado do amor da minha vida.",
    "hero.liveLabel": "dias juntos, e contando",
    "hero.btnCounter": "Nosso tempo juntos",
    "hero.btnPath": "Uma jornada pelo nosso caminho",
    "hero.scrollHint": "tem mais, ainda por escrever",
    "hero.sign": "Talvez meu coração não funcione perfeitamente, mas há uma coisa que ele sempre soube fazer: ser seu. Foi assim desde o começo, é assim agora e, enquanto houver uma batida nele, sempre vai ser.",
    "counter.eyebrow": "Nosso Pequeno Infinito",
    "counter.title": "Cada unidade, contando",
    "counter.sub": "É só tempo, mas eu quero contar ele com você.",
    "counter.years": "anos",
    "counter.months": "meses",
    "counter.days": "dias",
    "counter.hours": "horas",
    "counter.minutes": "min",
    "counter.seconds": "seg",
    "counter.footnote": "Matematicamente, nenhum infinito pode ser contado ou medido por completo, mas sabemos que existem infinitos maiores que outros, mais imensos, mais incomensuráveis. Sei que é difícil assimilar algo assim, mas acho que o amor pode ser sentido de um jeito parecido. Porque quando você encontra uma pessoa tão especial que faz o tempo ser o que passa mais rápido e, ao mesmo tempo, o que mais faz falta, você começa a entender que, mesmo podendo contar cada segundo, cada minuto e cada dia ao lado dela, o tempo não deixa de ser só tempo. Podem ser mil dias, um milhão de momentos ou uma vida inteira, e mesmo assim, quando estou com você, tudo parece passar num piscar de olhos. E talvez por isso eu não precise saber quanto tempo nos resta, só quero viver cada instante com você. Porque eu vou te amar não importa quanto tempo passe, mais que ontem, mas menos que amanhã; e aconteça o que acontecer, por mais tempo que passe ou por mais que o mundo mude, tem uma coisa que nunca vai mudar: que eu te amo.",
    "timeline.eyebrow": "Nossa conexão",
    "timeline.title": "Uma pequena constelação de momentos",
    "timeline.sub": "Os pontos que ligam 11 de novembro de 2025 até hoje.",
    "path.eyebrow": "nove paradas",
    "path.title": "Nosso caminho",
    "path.sub": "Da heliocorr, com muito amor.",
    "path.hint": "com amor, para o amor da minha vida",
    "modal.stop": "Parada {n} de 9",
    "modal.close": "Fechar"
  },

  es: {
    "nav.inicio": "Inicio",
    "nav.contador": "Contador",
    "nav.cronograma": "Cronograma",
    "nav.camino": "Camino",
    "hero.eyebrow": "catorce meses de",
    "hero.title1": "Nuestro",
    "hero.title2": "Pequeño",
    "hero.title3": "Infinito",
    "hero.sub": "Desde el 11 de noviembre de 2025, Al lado del amor de mi vida.",
    "hero.liveLabel": "días juntos, y contando",
    "hero.btnCounter": "Nuestro tiempo unidos",
    "hero.btnPath": "Un viaje por nuestro camino",
    "hero.scrollHint": "hay más, por escribir",
    "hero.sign": "Puede que mi corazón no funcione del todo bien, pero hay algo que siempre ha sabido hacer: ser tuyo. Lo fue desde el principio, lo es ahora y, mientras exista un latido en él, lo seguirá siendo.",
    "counter.eyebrow": "Nuestro Pequeño Infinito",
    "counter.title": "Cada unidad, contando",
    "counter.sub": "Solo es tiempo, pero quiero contarlo contigo.",
    "counter.years": "años",
    "counter.months": "meses",
    "counter.days": "días",
    "counter.hours": "horas",
    "counter.minutes": "min",
    "counter.seconds": "seg",
    "counter.footnote": "Matemáticamente, ningún infinito podemos contarlo ni medirlo por completo, pero sí sabemos que existen infinitos más grandes que otros, más inmensos, más incomensurables. Sé que es difícil asimilar algo así, pero creo que el amor puede sentirse de una manera parecida. Porque cuando encuentras a una persona tan especial que hace que el tiempo sea lo que más rápido pasa y, al mismo tiempo, lo que más falta hace, empiezas a entender que, aunque podamos contar cada segundo, cada minuto y cada día a su lado, el tiempo no deja de ser solo tiempo. Pueden ser mil días, un millón de momentos o toda una vida, y aun así, cuando estoy contigo, todo parece pasar en un abrir y cerrar de ojos. Y quizá por eso no necesito saber cuánto tiempo nos queda, solo quiero vivir cada instante contigo. Porque te voy a amar sin importar cuánto pase, más que ayer, pero menos que mañana; y pase lo que pase, cuánto tiempo pase o cuánto cambie el mundo, hay algo que no va a cambiar nunca: que te amo.",
    "timeline.eyebrow": "Nuestra conexión",
    "timeline.title": "Una pequeña constelación de momentos",
    "timeline.sub": "Los puntos que unen el 11 de noviembre de 2025 con hoy.",
    "path.eyebrow": "nueve paradas",
    "path.title": "Nuestro camino",
    "path.sub": "De heliocorr con mucho amor.",
    "path.hint": "Con amor, para el amor de mi vida",
    "modal.stop": "Parada {n} de 9",
    "modal.close": "Cerrar"
  }
};


let currentLang = DEFAULT_LANG;

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initNav();
  initStarfield();
  initHeroLive();
  initCounter();
  buildTimeline();
  buildPath();
  initModal();
  initTimelineObserver();
});

function initLang() {
  const saved = (() => {
    try {
      return localStorage.getItem("siteLang");
    } catch (e) {
      return null;
    }
  })();

  currentLang = saved && I18N[saved]
    ? saved
    : DEFAULT_LANG;

  const btns = document.querySelectorAll(".lang-btn");

  btns.forEach(b => {
    b.addEventListener("click", () => {
      currentLang = b.dataset.lang;

      try {
        localStorage.setItem("siteLang", currentLang);
      } catch (e) {}

      applyLang();
    });
  });

  applyLang();
}

function t(key) {
  return (
    (I18N[currentLang] && I18N[currentLang][key]) ||
    I18N[DEFAULT_LANG][key] ||
    key
  );
}

function applyLang() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute(
      "aria-label",
      t(el.dataset.i18nAria)
    );
  });

  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle(
      "active",
      b.dataset.lang === currentLang
    );
  });

  buildTimeline();
  buildPath();
  initTimelineObserver();
}

function initNav() {
  const links = document.querySelectorAll(".nav-link");
  const views = document.querySelectorAll(".view");
  const gotoBtns = document.querySelectorAll("[data-goto]");
  const toggle = document.getElementById("navToggle");
  const navLinksWrap = document.querySelector(".nav-links");

  function showView(name) {
    views.forEach(v => {
      v.classList.toggle(
        "active",
        v.dataset.view === name
      );
    });

    links.forEach(l => {
      l.classList.toggle(
        "active",
        l.dataset.view === name
      );
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    if (history.pushState) {
      history.pushState(
        null,
        "",
        "#" + name
      );
    }

    navLinksWrap.classList.remove("open");
  }

  links.forEach(l => {
    l.addEventListener("click", () => {
      showView(l.dataset.view);
    });
  });

  gotoBtns.forEach(b => {
    b.addEventListener("click", () => {
      showView(b.dataset.goto);
    });
  });

  toggle.addEventListener("click", () => {
    navLinksWrap.classList.toggle("open");
  });

  const initial = (
    location.hash || "#inicio"
  ).replace("#", "");

  if (document.getElementById(initial)) {
    showView(initial);
  }
}

function getDiff(start, now) {
  let years =
    now.getFullYear() -
    start.getFullYear();

  let months =
    now.getMonth() -
    start.getMonth();

  let days =
    now.getDate() -
    start.getDate();

  let hours =
    now.getHours() -
    start.getHours();

  let minutes =
    now.getMinutes() -
    start.getMinutes();

  let seconds =
    now.getSeconds() -
    start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const prevMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    );

    days += prevMonth.getDate();
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

const LOCALE_MAP = {
  en: "en-US",
  pt: "pt-BR",
  es: "es-CO"
};

function initHeroLive() {
  const el =
    document.getElementById("heroDays");

  function tick() {
    const totalDays = Math.floor(
      (Date.now() -
        START_DATE.getTime()) /
      86400000
    );

    el.textContent =
      totalDays.toLocaleString(
        LOCALE_MAP[currentLang] ||
        "en-US"
      );
  }

  tick();

  setInterval(
    tick,
    1000 * 30
  );
}

function initCounter() {
  const nums = {
    years: document.querySelector(
      '[data-target="years"]'
    ),
    months: document.querySelector(
      '[data-target="months"]'
    ),
    days: document.querySelector(
      '[data-target="days"]'
    ),
    hours: document.querySelector(
      '[data-target="hours"]'
    ),
    minutes: document.querySelector(
      '[data-target="minutes"]'
    ),
    seconds: document.querySelector(
      '[data-target="seconds"]'
    )
  };

  function tick() {
    const d = getDiff(
      START_DATE,
      new Date()
    );

    nums.years.textContent = d.years;
    nums.months.textContent = d.months;
    nums.days.textContent = d.days;
    nums.hours.textContent = pad(d.hours);
    nums.minutes.textContent = pad(d.minutes);
    nums.seconds.textContent = pad(d.seconds);
  }

  tick();

  setInterval(
    tick,
    1000
  );
}

function buildTimeline() {
  const wrap =
    document.getElementById("timeline");

  wrap.innerHTML = TIMELINE
    .map(item => `
      <div class="timeline-item">
        <span class="timeline-date">
          ${item.date}
        </span>

        <h3>
          ${item.title[currentLang] ||
          item.title.es}
        </h3>

        <p>
          ${item.text[currentLang] ||
          item.text.es}
        </p>
      </div>
    `)
    .join("");
}

function initTimelineObserver() {
  const items =
    document.querySelectorAll(
      ".timeline-item"
    );

  const io =
    new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add(
              "in-view"
            );
          }
        });
      },
      {
        threshold: 0.2
      }
    );

  items.forEach(i => {
    io.observe(i);
  });
}

function buildPath() {
  const wrap =
    document.getElementById("pathNodes");

  wrap.innerHTML = PATH_CARDS
    .map((card, i) => `
      <button
        class="path-node"
        data-index="${i}"
        aria-haspopup="dialog"
      >
        <span class="path-node-star">
          ${String(i + 1).padStart(2, "0")}
        </span>

        <span class="path-node-label">
          <span class="path-node-title">
            ${card.title[currentLang] ||
            card.title.es}
          </span>

          <span class="path-node-hint">
            ${card.date} ·
            ${t("path.hint")}
          </span>
        </span>
      </button>
    `)
    .join("");

  wrap
    .querySelectorAll(".path-node")
    .forEach(btn => {
      btn.addEventListener(
        "click",
        () => {
          openCard(
            Number(btn.dataset.index),
            btn
          );
        }
      );
    });

  drawPathCurve(
    PATH_CARDS.length
  );
}

function drawPathCurve(count) {
  const path =
    document.getElementById(
      "pathLine"
    );

  const height = 1400;
  const segment = height / count;

  let d = "M 500 0";

  for (
    let i = 1;
    i <= count;
    i++
  ) {
    const y = i * segment;
    const x =
      i % 2 === 0
        ? 780
        : 220;

    const prevY =
      (i - 1) * segment;

    const cy1 =
      prevY +
      segment * 0.5;

    const cy2 =
      y -
      segment * 0.5;

    d +=
      ` C 500 ${cy1}, ` +
      `${x} ${cy2}, ` +
      `${x} ${y}`;
  }

  path.setAttribute(
    "d",
    d
  );
}

let currentCardBtn = null;

function initModal() {
  const modal =
    document.getElementById(
      "cardModal"
    );

  const closeBtn =
    document.getElementById(
      "cardModalClose"
    );

  const backdrop =
    document.getElementById(
      "cardModalBackdrop"
    );

  function close() {
    modal.classList.remove(
      "open"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    if (currentCardBtn) {
      currentCardBtn.focus();
    }
  }

  closeBtn.addEventListener(
    "click",
    close
  );

  backdrop.addEventListener(
    "click",
    close
  );

  document.addEventListener(
    "keydown",
    e => {
      if (e.key === "Escape") {
        close();
      }
    }
  );
}

function openCard(
  index,
  btnEl
) {
  currentCardBtn = btnEl;

  btnEl.classList.add(
    "opened"
  );

  const card =
    PATH_CARDS[index];

  const modal =
    document.getElementById(
      "cardModal"
    );

  document.getElementById(
    "cardModalEyebrow"
  ).textContent =
    `${t("modal.stop").replace(
      "{n}",
      index + 1
    )} · ${card.date}`;

  document.getElementById(
    "cardModalTitle"
  ).textContent =
    card.title[currentLang] ||
    card.title.es;

  document.getElementById(
    "cardModalText"
  ).textContent =
    card.text[currentLang] ||
    card.text.es;

  modal.classList.add(
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );
}

function initStarfield() {
  const canvas =
    document.getElementById(
      "stars-canvas"
    );

  const ctx =
    canvas.getContext("2d");

  let stars = [];
  let w;
  let h;

  function resize() {
    w =
      canvas.width =
      window.innerWidth;

    h =
      canvas.height =
      document.documentElement
        .scrollHeight;

    const count =
      Math.floor(
        (w * h) / 9000
      );

    stars =
      Array.from(
        { length: count },
        () => ({
          x:
            Math.random() *
            w,

          y:
            Math.random() *
            h,

          r:
            Math.random() *
            1.3 +
            0.2,

          s:
            Math.random() *
            0.015 +
            0.003,

          phase:
            Math.random() *
            Math.PI *
            2
        })
      );
  }

  const reduceMotion =
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches;

  function draw(t) {
    ctx.clearRect(
      0,
      0,
      w,
      h
    );

    ctx.fillStyle =
      "#f6ece0";

    stars.forEach(st => {
      const twinkle =
        reduceMotion
          ? 0.7
          : 0.5 +
            0.5 *
              Math.sin(
                t * st.s +
                st.phase
              );

      ctx.globalAlpha =
        0.15 +
        twinkle * 0.55;

      ctx.beginPath();

      ctx.arc(
        st.x,
        st.y,
        st.r,
        0,
        Math.PI * 2
      );

      ctx.fill();
    });

    ctx.globalAlpha = 1;

    if (!reduceMotion) {
      requestAnimationFrame(
        draw
      );
    }
  }

  window.addEventListener(
    "resize",
    resize
  );

  resize();

  requestAnimationFrame(
    draw
  );
}