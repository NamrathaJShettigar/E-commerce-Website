let shopButton = document.querySelector(".shop-btn");

let productsSection = document.querySelector("#products");

shopButton.addEventListener("click", function() {
    productsSection.scrollIntoView({
        behavior: "smooth"
    });
});

let cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        console.log("Product added to cart!");
    });
});