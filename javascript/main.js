document.addEventListener("DOMContentLoaded", function() {
    var mensajeDiv = document.getElementById("mensaje");
    var contenidoDiv = document.getElementById("contenido");
 
    setTimeout(function() {
       mensajeDiv.style.opacity = "0";
       setTimeout(function() {
          mensajeDiv.style.display = "none";
          contenidoDiv.style.display = "block";
       }, 1000);
    }, 1000);
 });
 