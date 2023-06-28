"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Deberá tomar esta versión de la aplicación de blog
vista en la última clase y refactorizar:
* Dividir la app en archivos (app.js, events.js, etc).
* Usar funciones flecha en los eventos.
* Crear un prototipo "Post" que represente la estructura de 
  datos de un post e implemente la función "render" 
  (tal cual lo realizado con el prototipo Pokemons).

 */


// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipal = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipal.textContent);

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

// ----------------------------------------------------


// ----------------------------------------------------
