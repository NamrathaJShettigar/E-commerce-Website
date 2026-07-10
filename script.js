let shopButton = document.querySelector(".shop-btn");

let productsSection = document.querySelector("#products");

shopButton.addEventListener("click", function() {
    productsSection.scrollIntoView({
        behavior: "smooth"
    });
});

let cartButtons = document.querySelectorAll(".product-card button");

let cartCount=document.querySelector(".cart-count");

let count= 0;

cartButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        count++;
        cartCount.textContent = count;
        button.textContent = "Added to Cart";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 2000);
    });
});
/*
let heading = document.querySelector("h1");
heading.textContent = "Welcome back to ShopEase";

let heroheading = document.querySelector(".hero-content h1");
heroheading.style.color =  "purple";

let herohead = document.querySelector(".hero-content h1");

herohead.classList.add("highlight");

herohead.classList.remove("highlight");

herohead.classList.toggle("highlight");

let heading = document.querySelector(".hero-content h1");
let shopbutton = document.querySelector(".shop-btn");

shopbutton.addEventListener("click", function () {
    heading.classList.toggle("highlight");
});
*/

let products = [
    "Nike Shoes",
    "Headphone",
    "Acer Laptop",
    "Apple iPhone"
];
// products[1] = "Airpods"; Modyifying array

// products.push("Galaxy watch"); Adding new elmnts
console.log(products);
console.log(products.length);

for(let i=0; i<products.length; i++){
    console.log(products[i]);
}

let searchInput = document.querySelector(".search-input");
let searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", function() {
    let userSearch = searchInput.value.toLowerCase();
    for(let i=0; i<products.length; i++){
        if (products[i].toLowerCase() === userSearch) {
            console.log("Product found!");
        }
    }
});