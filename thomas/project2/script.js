document.addEventListener("DOMContentLoaded", function() {
    const url = "http://localhost:3300/thomas";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let output = "";
            let totalPrice = 0;

            data.games2.forEach(item => {
                output += `
                    <div class="product">
                        <img src="${item.img}" alt="${item.description}">
                        <p class="title">${item.text}</p>
                        <p class="description">${item.description}</p>
                        <p class="price">
                            <span>${item.price}</span>
                            <span>&euro;</span>
                        </p>
                        <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
                    </div>
                `;
            });

            document.querySelector(".products").innerHTML = output;

            let buttons = document.querySelectorAll(".cart");

            buttons.forEach((button, index) => {
                button.addEventListener("click", () => {
                    let price = parseFloat(data.watch[index].price);
                    totalPrice += price;
                    console.log("Price: " + price + "€");
                    console.log("Total Price: " + totalPrice.toFixed(2) + "€");
                });
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
