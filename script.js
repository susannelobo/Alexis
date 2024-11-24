// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if(name && email && message) {
        alert(`Thank you, ${name}. Your message has been received!`);
        // You can add AJAX here to send form data to your server
    } else {
        alert('Please fill all the fields.');
    }
});



const cartButton = document.getElementById("cart-button");
const cartContainer = document.getElementById("cart-container");

cartButton.addEventListener("click", () => {
    cartContainer.style.display =
        cartContainer.style.display === "none" || cartContainer.style.display === ""
            ? "block"
            : "none";
});


// Initialize the cart status message
document.querySelector(".cart-message").textContent = "Cart is Empty";

// Add item to cart when "Add to Cart" button is clicked
function addToCart(itemName, itemPrice) {
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartMessage = document.querySelector(".cart-message");
    alert('Added to cart!');

    // Create a new cart item element
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <span>${itemName}</span>
        <span>${itemPrice.toFixed(2)}</span>
        <button class="remove-item" onclick="removeItem(this)">🗑️</button>
        
    `;
        // Append the item to the cart
    cartItemsContainer.appendChild(cartItem);

    // Update the cart total
    updateCartTotal();
    cartMessage.textContent = "Item added to cart";
}

// Remove item from cart
function removeItem(button) {
    const cartItem = button.parentElement;
    cartItem.remove();

    // Update the cart total
    updateCartTotal();
}

// Update the cart total
function updateCartTotal() {
    const cartItems = document.querySelectorAll(".cart-item span:nth-child(2)");
    const cartMessage = document.querySelector(".cart-message");
    let total = 0;

    // Calculate total price
    cartItems.forEach((item) => {
        total += parseFloat(item.textContent.replace("$", ""));
    });

    // Update the total price in the cart
    const totalElement = document.querySelector(".cart-total");
    totalElement.textContent = `Total: ${total.toFixed(2)}`;

    // If there are no items, set the message back to "Cart is Empty"
    if (cartItems.length === 0) {
        cartMessage.textContent = "Cart is Empty";
    }
}

// Checkout function
function checkout() {
    const totalAmount = document.querySelector(".cart-total").textContent;
    if (totalAmount !== "Total: 0.00") {
        alert(`Proceeding to checkout with total amount: ${totalAmount}`);
        const cartSummary = document.getElementById('cart-summary');

        // You can add additional logic here for the checkout process.
        clearCart();
    } else {
        alert("Your cart is empty. Please add items to the cart.");
    }
    let summaryHTML = '<h3>Your Cart:</h3>';
    let total = 0;
    cart.forEach((item) => {
        summaryHTML += `<p>${item.name} - $${item.price} x ${item.quantity}</p>`;
        total += item.price * item.quantity;
    });
    summaryHTML += `<p><strong>Total: $${total.toFixed(2)}</strong></p>`;
    cartSummary.innerHTML = summaryHTML;

    // Show checkout modal
    checkoutModal.style.display = 'block';
}

// Clear the cart (if needed)
function clearCart() {
    document.querySelector(".cart-items").innerHTML = "";
    document.querySelector(".cart-total").textContent = "Total: 0.00";
    document.querySelector(".cart-message").textContent = "Cart is Empty";
}

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
    payment.style.display = "none";
  });
  