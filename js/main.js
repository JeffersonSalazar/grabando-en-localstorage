/*  
    3 VARIABLES PARA ALMACENAR LAS ETIQUETAS DE HTML
    * contenedor lienzo
    * contenedor boton pricipal
    * contenedor grupo botones
*/

// Funcion de click para mostrar u ocultar los botones modificadores de color
let btnMain = document.querySelector('#btn-main');

btnMain.addEventListener('click', () => {
    containerBtn.classList.toggle('btn-ocult');
});


// Funcion de click para añadir o remover el color de fondo del lienzo
let sectLienzo = document.querySelector('#sect-lienzo');
let containerBtn = document.querySelector('#container-btn');

containerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let color = e.target.classList[0];
    
    switch (color) {
        case "btn-sky": {
            localStorage.setItem('colorFondo', 'bg-sky');
            sectLienzo.classList.toggle('bg-sky');
            sectLienzo.classList.remove('bg-orange', 'bg-purple');break;
        }
        case "btn-orange": {
            localStorage.setItem('colorFondo', 'bg-orange');
            sectLienzo.classList.toggle('bg-orange');
            sectLienzo.classList.remove('bg-sky', 'bg-purple');break;
        }
        case "btn-purple": {
            localStorage.setItem('colorFondo', 'bg-purple');
            sectLienzo.classList.toggle('bg-purple');
            sectLienzo.classList.remove('bg-orange', 'bg-sky');break;
        }
        
        default: console.log('error');break;
    }
});

// Funcion para guardar la ultima configuracion de color
( () => {
    let dateColor = localStorage.getItem('colorFondo');
    
    if(dateColor === null) {
        sectLienzo.classList.add('bg-white');
    } else{
        sectLienzo.classList.add(dateColor);
    }
}) ();
