let app = document.getElementById('app');

let typewriter = new Typewriter(app,{
    loop:true,
    delay:75,
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