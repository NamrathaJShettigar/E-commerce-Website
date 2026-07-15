//==========================
// CART VARIABLES
//==========================

let cart = [];

let cartList = document.querySelector("#cart-list");

let cartButtons = document.querySelectorAll(".product-card button");

let cartCount = document.querySelector(".cart-count");


//==========================
// SEARCH VARIABLES
//==========================

let searchInput = document.querySelector(".search-input");

let searchButton = document.querySelector(".search-btn");


//==========================
// PRODUCTS
//==========================

let products = [
    "Nike Shoes",
    "Headphone",
    "Acer Laptop",
    "Apple iPhone"
];


//==========================
// SHOP NOW BUTTON
//==========================

let shopButton = document.querySelector(".shop-btn");

let productsSection = document.querySelector("#products");


// ==========================
// DISPLAY CART FUNCTION
// ==========================

function displayCart() {
    cartList.innerHTML = "";

    if(cart.length === 0){
        cartList.innerHTML = "<li>Your cart is empty.</li>";
        return;
    }

    for(let i = 0; i < cart.length; i++){
        cartList.innerHTML += `
        <li>
            ${cart[i]}
            <button class = "remove-btn" data-index = "${i}">
                Remove
            </button>
        </li>
        `;
    }
    let removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(function(button){
        button.addEventListener("click",function(){
            let productIndex = button.dataset.index;
            
            cart.splice(productIndex, 1);

            localStorage.setItem("cart", JSON.stringify(cart));
            
            cartCount.textContent = cart.length;

            displayCart();
        });
    });
}


//==========================
//LOAD CART FROM LOCAL STORAGE
//==========================

let savedCart = JSON.parse(localStorage.getItem("cart"));

if (savedCart !== null) {
    cart = savedCart;
    cartCount.textContent = cart.length;
    displayCart();
}


// ==========================
// SHOP NOW EVENT
// ==========================

shopButton.addEventListener("click", function() {
    productsSection.scrollIntoView({
        behavior: "smooth"
    });
});


// ==========================
// ADD TO CART EVENT
// ==========================

cartButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        let productName = button.parentElement.querySelector("h3").textContent;

        if(!cart.includes(productName)){
            cart.push(productName);

            localStorage.setItem("cart", JSON.stringify(cart));

            cartCount.textContent = cart.length;

            displayCart();
        }
        
        button.textContent = "Added to Cart";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 2000);
    }); 
});


// ==========================
// SEARCH EVENT
// ==========================

searchButton.addEventListener("click", function() {
    let userSearch = searchInput.value.toLowerCase();
    for(let i = 0; i < products.length; i++){
        if (products[i].toLowerCase() === userSearch) {
            console.log("Product found!");
        }
    }
});