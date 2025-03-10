// Selecciona todos los botones dentro del carrusel
const buttons = document.querySelectorAll(".category");

// Añade un evento de clic a cada botón
buttons.forEach(button => {
    button.addEventListener("click", function () {
        // Remueve la clase 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove("active"));

        // Agrega la clase 'active' al botón que se presionó
        this.classList.add("active");
    });
});
