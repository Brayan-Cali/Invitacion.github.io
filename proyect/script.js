// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log("¡Bienvenido a la página de invitación!");

    // Alerta de confirmación cuando se hace clic en el botón
    const button = document.querySelector('.button');
    button.addEventListener('click', function() {
        alert("¡Gracias por confirmar tu asistencia!");
    });
});
