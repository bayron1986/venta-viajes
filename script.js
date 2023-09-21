import { barcelona, roma, paris, londres } from './ciudades.js';

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');
let imagenCiudad = document.getElementById('imagenCiudad');
let botonInicio = document.getElementById('botonInicio'); // Selecciona el botón

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remover la clase active de todos los enlaces
        enlaces.forEach(function (e) {
            e.classList.remove('active');
        });
        // Agregar la clase active al enlace actual
        this.classList.add('active');

        // Obtener el contenido según el enlace
        let contenido = obtenerContenido(this.textContent);

        // Mostrar el contenido
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;

        // Obtener y mostrar la imagen correspondiente
        let ciudad = this.textContent.toLowerCase();
        imagenCiudad.src = `./imagenes/${ciudad}.jpg`;
        imagenCiudad.alt = `Imagen de ${ciudad}`;

        // Ocultar la imagen del título
        let imagenTitulo = document.getElementById('imagenTitulo');
        imagenTitulo.style.display = 'none';
    });
});

// Agrega un evento de escucha al botón de inicio
botonInicio.addEventListener('click', function () {
    // Restablece el contenido del título, subtitulo y párrafo
    tituloElemento.innerHTML = 'Bienvenido a nuestra web';
    subTituloElemento.innerHTML = 'Elija su destino';
    parrafoElemento.innerHTML = 'Compre los mejores paquetes en nuestra empresa';
    
    // Muestra la imagen del título nuevamente
    let imagenTitulo = document.getElementById('imagenTitulo');
    imagenTitulo.style.display = 'block';

    // Borra la imagen de la ciudad
    imagenCiudad.src = '';
    imagenCiudad.alt = '';

    // Remueve la clase active de todos los enlaces
    enlaces.forEach(function (enlace) {
        enlace.classList.remove('active');
    });
});

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'París': paris,
        'Londres': londres,
        'Roma': roma,
    };
    return contenido[enlace];
}
