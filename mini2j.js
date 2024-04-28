let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}
