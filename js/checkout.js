document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".lista1");

    items.forEach(item => {
        const minusBtn = item.querySelector(".minus");
        const plusBtn = item.querySelector(".plus");
        const numberSpan = item.querySelector(".number");
        const priceSpan = item.querySelector(".span2");
        const totalItemsSpan = document.querySelector(".total-items");
        const totalPriceSpan = document.querySelector(".total-price");
        const subtotalSpan = document.querySelector(".subtotal");

        let quantity = parseInt(numberSpan.textContent);
        let price = parseFloat(priceSpan.textContent.replace("$", ""));

        minusBtn.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                numberSpan.textContent = quantity;
                updateTotal();
            }
        });

        plusBtn.addEventListener("click", () => {
            quantity++;
            numberSpan.textContent = quantity;
            updateTotal();
        });

        function updateTotal() {
            let totalItems = 0;
            let totalPrice = 0;

            document.querySelectorAll(".lista1").forEach(item => {
                let qty = parseInt(item.querySelector(".number").textContent);
                let price = parseFloat(item.querySelector(".span2").textContent.replace("$", ""));
                totalItems += qty;
                totalPrice += qty * price;
            });

            totalItemsSpan.textContent = totalItems;
            totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
            subtotalSpan.textContent = `$${totalPrice.toFixed(2)}`;
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const payButton = document.querySelector(".pay-btn");
    const paymentPopup = document.getElementById("paymentPopup");
    const closePopup = document.querySelector(".close-popup");

    payButton.addEventListener("click", () => {
        paymentPopup.classList.add("active");
    });

    closePopup.addEventListener("click", () => {
        paymentPopup.classList.remove("active");
    });

    // Cerrar el popup si se hace clic fuera de él
    paymentPopup.addEventListener("click", (e) => {
        if (e.target === paymentPopup) {
            paymentPopup.classList.remove("active");
        }
    });
});
