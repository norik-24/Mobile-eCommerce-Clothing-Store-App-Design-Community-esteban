const buttons = document.querySelectorAll(".category");


buttons.forEach(button => {
    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const heartButtons = document.querySelectorAll(".heart-btn");

    heartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const heartIcon = this.querySelector("img");

            if (this.classList.contains("liked")) {
                heartIcon.src = "../storage/img/heart.png"; // Imagen de corazón vacío
                this.classList.remove("liked");
            } else {
                heartIcon.src = "../storage/img/heart-filled.png"; // Imagen de corazón lleno
                this.classList.add("liked");
            }
        });
    });
});

