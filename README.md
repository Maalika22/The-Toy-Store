<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soft Toy Shop</title>
    <link rel="stylesheet" href="mini2c.css">
</head>
<body>
    <header>
        <img src="toy_logo2.jpeg" alt="Soft Toy Shop Logo" class="logo">
        <h1>The Panda Store</h1>
    </header>
    <div class="container">
        <div class="product">
            <img src="soft_toy1.jpg" alt="Doll">
            <h2>Doll</h2>
            <p>$19.99</p>
            <button onclick="addToCart('Soft Toy 1', 19.99)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy2.jpg" alt="Pinky Puffy">
            <h2>Pinky Puffy</h2>
            <p>$24.99</p>
            <button onclick="addToCart('Soft Toy 2', 24.99)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy3.jpeg" alt="Olaf">
            <h2>Olaf</h2>
            <p>$23.9</p>
            <button onclick="addToCart('Soft Toy 3', 23.9)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy4.jpg" alt="Candy Teddy">
            <h2>Candy Teddy</h2>
            <p>$12.78</p>
            <button onclick="addToCart('Soft Toy 4', 12.78)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy5.jpg" alt="Shinchan">
            <h2>Shinchan</h2>
            <p>$19.99</p>
            <button onclick="addToCart('Soft Toy 5', 19.99)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy6.jpg" alt="Turtle">
            <h2>Turtle</h2>
            <p>$29.99</p>
            <button onclick="addToCart('Soft Toy 6', 29.99)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy7.jpg" alt="Unicorn">
            <h2>Unicorn</h2>
            <p>$12.78</p>
            <button onclick="addToCart('Soft Toy 7', 12.78)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy8.jpg" alt="Minion">
            <h2>Minion</h2>
            <p>$10.67</p>
            <button onclick="addToCart('Soft Toy 8', 10.67)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy9.jpg" alt="Dino">
            <h2>Dino</h2>
            <p>$23.99</p>
            <button onclick="addToCart('Soft Toy 9', 23.99)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy10.jpg" alt="Rhino">
            <h2>Rhino</h2>
            <p>$14.44</p>
            <button onclick="addToCart('Soft Toy 10', 14.44)">Add to Cart</button>
        </div>
        <div class="product">
            <img src="soft_toy11.jpg" alt="Elephant">
            <h2>Elephant</h2>
            <p>$18.78</p>
            <button onclick="addToCart('Soft Toy 11', 18.78)">Add to Cart</button>
        </div>
    </div>

    <div id="cart">
        <h2>Shopping Cart</h2>
        <ul id="cart-items"></ul>
        <p>Total: <span id="cart-total">$0.00</span></p>
        <button onclick="checkout()">Checkout</button>
    </div>

    <script src="mini2j.js"></script>
</body>
</html>
