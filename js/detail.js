document.addEventListener("DOMContentLoaded", function () {
    const minusButton = document.querySelector(".minus");
    const plusButton = document.querySelector(".plus");
    const quantitySpan = document.querySelector(".quantity-number");
    
    let quantity = 1;
    const minQuantity = 1;
    const maxQuantity = 10;

    minusButton.addEventListener("click", function () {
        if (quantity > minQuantity) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });

    plusButton.addEventListener("click", function () {
        if (quantity < maxQuantity) {
            quantity++;
            quantitySpan.textContent = quantity;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Selección de tallas
    const sizeButtons = document.querySelectorAll(".size");
    sizeButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".size.selected")?.classList.remove("selected");
            button.classList.add("selected");
        });
    });

    // Selección de colores
    const colorButtons = document.querySelectorAll(".color");
    colorButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".color.selected")?.classList.remove("selected");
            button.classList.add("selected");
        });
    });
});
