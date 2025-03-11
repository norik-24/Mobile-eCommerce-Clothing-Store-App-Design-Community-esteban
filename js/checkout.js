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
