let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
})

// reconoces una acción porque tiene paréntesis después del nombre de la acción
// a veces tiene el operador punto
typewriter
    .pauseFor(2500) //milisegundos = 2.5 seg
    .typeString('Yakira González')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora FRONTEND JR')
    .pauseFor(1000)
    .start();



let audioElement; //variable para almacenar objeto de audio

const mainElement = document.querySelector('main'); // seleccionar la etiqueta main

mainElement.addEventListener('click', function () {
    if (!audioElement) {
        audioElement = new Audio('assets/music/we.mp3');
        audioElement.volume = 0.1
    }
    audioElement.play();
});

const pauseButton = document.getElementById('pauseButton');

pauseButton.addEventListener('click', function () {
    if (audioElement.paused) {
        audioElement.play();
        pauseButton.textContent = "Pausar";
    } else {
        audioElement.pause();
        pauseButton.textContent = "Reanudar";
    }
})