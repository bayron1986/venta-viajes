import {barcelona, roma, paris, londres} from './ciudades.js';

let enlaces= document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')


enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //remover la clase active de todos los enlaces
        enlaces.forEach(function (enlace) {
        enlace.classList.remove('active');
        });
// agregar la clase active al enlace actual
        this.classList.add('active')
// obtenemos el contenido segun el enlace
    let contenido= obtenerContenido(this.textContent)
// mostramos el contenido
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML = contenido.precio
    });
});

function obtenerContenido(enlace){
    let contenido= {
        'Barcelona': barcelona,
        'París': paris,
        'Londres': londres,
        'Roma': roma,
    };
     // Obtener la imagen correspondiente
     let imagenCiudad = document.getElementById('imagenCiudad');
     imagenCiudad.src = `imagenes/${enlace.toLowerCase()}.jpg`;

return contenido[enlace];
}