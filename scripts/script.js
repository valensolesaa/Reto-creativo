// Obtener los elementos
var modal = document.getElementById("modal-notis"); // Usamos el id 'modal-notis'
var btn = document.getElementById("open-modal-btn"); // El botón que abre el modal
var span = document.getElementsByClassName("close")[0]; // El botón de cerrar (si tienes uno dentro del modal)

// Cuando el usuario hace clic en el botón, muestra el modal
btn.onclick = function() {
    modal.style.display = "block";  // Cambiamos a "flex" o "block" para que se muestre el modal
}

// Si el usuario hace clic fuera del modal (en el fondo), lo cierra
window.onclick = function(event) {
    if (event.target === modal) {  // Verifica si el clic fue en el fondo (no dentro del contenido)
        modal.style.display = "none";
    }
}
