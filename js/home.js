const buttons = document.querySelectorAll(".category");


buttons.forEach(button => {
    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".favorite-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("favorited");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const footerButtons = document.querySelectorAll(".footer-btn");

    footerButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remover la clase 'active' de todos los botones
            footerButtons.forEach(btn => btn.classList.remove("active"));

            // Agregar la clase 'active' solo al botón clickeado
            this.classList.add("active");
        });
    });
});