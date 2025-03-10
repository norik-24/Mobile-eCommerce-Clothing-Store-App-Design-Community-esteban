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