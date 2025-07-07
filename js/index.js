let flujo;
const frasesBreakingBad = [
    "¿Cuál es la gracia de ser un forajido si tienes responsabilidades?",
    "No estoy en peligro, Skyler, yo soy el peligro. Si llaman a la puerta de un hombre y le disparan, ¿Piensas que ese seré yo? ¡No! Yo soy el que llama.",
    "Cada pocos meses vengo aquí a hacerme una revisión rutinaria sabiendo que en una de esas ¡al infierno! Tal vez incluso hoy voy a escuchar una de esas malas noticias, pero hasta entonces… ¿Quién está a cargo? ¡Yo! Así es como vivo mi vida.",
    "Si crees que hay un infierno, nosotros vamos casi seguro hacia allá. Pero no me voy a recostar hasta que llegue.",
    "Eres el hombre más inteligente que conozco y eres demasiado estúpido para ver que ya tomó su decisión 10 minutos atrás.",
    "¡Don Eladio está muerto, sus jefes están muertos, no tienen a nadie más por quien luchar, llenen sus bolsillos y váyanse en paz o vengan a luchar y mueran!",
    "He pasado toda mi vida asustado, asustado de las cosas que podrían suceder. Pero todo cambió desde que me dijeron que tenía cáncer. Me levanto para darle una patada en los dientes al miedo.",
    "Tú conoces el negocio y yo conozco la química.",
    "Si eso es cierto, si no sabes quién soy, entonces quizás tu mejor opción sería andarte con cuidado.",
    "Lo hice por mí. Me gustó. Yo era bueno en eso. Y yo estaba realmente… yo estaba vivo.",
    "Hay oro en las calles esperando que alguien venga y lo levante.",
    "¿Que tal si tomas esos químicos y haces algo de combustible de cohetes?, así puedes enviar una señal de luz.",
    "Nunca le mientas a un mentiroso.",
    "Todo el mundo suena como Meryl Streep con una pistola en la cabeza.",
    "Alguien tiene que proteger a esta familia del hombre que protege a esta familia.",
    "Eres una bomba de tiempo y no tengo ninguna intención de estar cerca cuando explotes."];

const frasesSimpsons = [
    "Oh poderoso Dios del océano, los griegos te llamaban Poseidón y los romanos... Acuaman.",
    "Normalmente no rezo, pero si estás ahí­, por favor, sálvame Superman.",
    "¡Por favor, no me comas! Tengo mujer e hijos ¡Cometelos a ellos!",
    "“Para Empezar Presionar Cualquier Tecla” ¿Dónde está la tecla “Cualquier”?",
    "¡No soy un mal tipo! Trabajo duro y quiero a mis hijos. Entonces, ¿Por qué tengo que pasarme medio domingo escuchando cómo voy a ir al infierno?",
    "¡Operadora! ¡Deme el número para el 911!",
    "“¡Los libros son inútiles! Yo leí único libro en mi vida: «Matar un ruiseñor». ¡Y no me dio ninguna información sobre cómo matar ruiseñores! Sí, es cierto que me enseñó a no juzgar a un hombre por el color de su piel, ¿pero eso para qué me sirve?”.",
    "Pero Marge, ¿Y si hemos elegido la religión equivocada? ¡Solo estarí­amos enfadando a dios más y más cada semana!",
    "No estoy en condiciones de conducir… ¡Espera! No deberí­a escucharme, ¡Estoy borracho!",
    "Marge: Tienes que ir al trabajo / Homero: Dijeron que si llegaba tarde otra vez me despedían, no pienso arriesgarme.",
    "No te das cuenta Marge, podría ser la única vez que me llamen señor sin decir usted está haciendo el ridículo.",
    "La menopausia es ese momento en la vida de toda mujer en que a la cigüeña que trae los bebes le dispara un cazador borracho.",
    "Quiero compartir algo contigo: Tres pequeñas frases que te ayudarán a lo largo de tu vida: 1- ¡Cúbreme!, 2- ¡Buena idea Jefe!, 3- Estaba así­ cuando llegué.",
    "Cerveza: causa y solución de todos los problemas.",
    "Bart, no quiero alarmarte, pero creo que el Coco, ¡si, el Coco!, está en la casa.",
    "¿Cómo se supone que la educación me va a hacer más listo? Al contrario, cada vez que aprendo algo nuevo, algo que ya sabí­a desaparece de mi cerebro. ¿Recuerdas cuando hice ese curso de fabricación de vino en casa y se me olvidó conducir?",
    "Intentarlo es el primer paso hacia el fracaso.",
    "Cuando miro las caras sonrientes de los niños, solo se que están planeando golpearme con algo.",
    "Si algo es difícil y duro de hacer, entonces no merece la pena hacerlo.",
    "Librarte de formar parte de un jurado popular es facil. Solo tienes que decir que tienes prejuicios contra todas las razas.",
    "Hijo, cuando participes en eventos deportivos, no importa si ganas o pierdes: sino en ¡cuánto te emborrachas!"];

function solicitarMotivo() {
    let opcion = null;
    while(opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4" && opcion != "5") {
        opcion = prompt("Que frase queres? 1. Frases random Breaking Bad, 2. Frases random Los Sipmsons, 3. Buscar frases Breaking Bad, 4. Buscar frases Los Simpsons, 5. Salir");
    }
    return opcion;
}

function mostrarFrase(frases) {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    console.log(frase);
}

function solicitarPalabraClave() {
    let palabraClave;
    while(!palabraClave) {
        palabraClave = prompt("Ingrese una palabra clave para buscar en las frases: ");
    }
    return palabraClave;
}

function buscarFrasesPorPalabraClave(frases, palabraClave) {
    for(let i = 0; i < frases.length; i++) {
        if(frases[i].toLowerCase().includes(palabraClave.toLowerCase())) {
            console.log(frases[i]);
        }
    }
}

function ejecutarFlujo(opcion) {
    switch(opcion) {
        case "1":
            console.log("Frase de Breaking Bad");
            mostrarFrase(frasesBreakingBad);
            break;
        case "2":
            console.log("Frase de Los Simpsons");
            mostrarFrase(frasesSimpsons);
            break;
        case "3":
            console.log("Buscando resultados para Breaking Bad...");
            buscarFrasesPorPalabraClave(frasesBreakingBad, solicitarPalabraClave());
            break;
        case "4":
            console.log("Buscando resultados para Los Simpsons...");
            buscarFrasesPorPalabraClave(frasesSimpsons, solicitarPalabraClave());
            break;
        case "5":
            console.log("Ouch!");
            break;
    }
}

flujo = solicitarMotivo();
ejecutarFlujo(flujo);

// Continuar solicitando motivos hasta que el usuario decida salir
// El flujo se repetirá hasta que el usuario ingrese "5" para salir
while(flujo != "5") {
    flujo = solicitarMotivo();
    ejecutarFlujo(flujo);
}

