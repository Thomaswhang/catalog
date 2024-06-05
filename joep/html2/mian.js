document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3300/p5')
    .then(response => response.json())
    .then(products => {
        let output = "";
          //ads the cards
        for (let item of products.two) {
            output += `
                <div class="product">
                    <img class="img-pro" src="${item.image}" alt="${item.description}">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <p class="price">
                        <span>${item.price}</span>
                        <span></span>
                    </p>
                    <button class="add-to-cart cart" data-title="${item.title}" data-price="${item.price}">
                        Add to cart <i class="bx bx-cart-alt"></i>
                    </button>
                </div>
            `;
        }
        //adds to the shoping card 
        document.querySelector(".products").innerHTML = output;

        document.querySelectorAll('.add-to-cart').forEach(function(button) {
            button.addEventListener('click', addToCart);
        });
    });

    function addToCart() {
        const title = this.getAttribute('data-title');
        const price = this.getAttribute('data-price');
 //comfirms that it is goining to the shoping card
        if (confirm(`Do you want to add ${title} to your cart?`)) {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <p>${title} - ${price} <button class="remove-from-cart">Remove</button></p>
            `;
            document.querySelector(".cart-items").appendChild(cartItem);
// Add event listener to the "Remove" button in the cart item
            cartItem.querySelector('.remove-from-cart').addEventListener('click', function() {
                if (confirm(`Do you want to remove ${title} from your cart?`)) {
                    cartItem.remove();
                }
            });
        }
    }

    let cartIn = document.querySelector(".cart-items");
    let cartCon = document.querySelector(".cart-container");

    cartCon.addEventListener('click', function() {
        cartIn.classList.toggle('hidden');
    });
});
