"use strict";

function changeImage(image){
    let img = document.querySelector("#sneakers-img");
    img.setAttribute("src", image);
}

function increaseCartNumber(){
    let cart = Number(document.querySelector("#p6-span").textContent);
    cart ++
    document.querySelector("#p6-span").textContent = cart
}

function decreaseNumber(){
    let cart = Number(document.querySelector("#p6-span").textContent);
    cart --
    document.querySelector("#p6-span").textContent = cart

    if (cart < 0){
        document.querySelector("#p6-span").textContent = 0;
    }
}

function addToCart(){
    let cartNumber = document.querySelector("#p6-span").textContent;

    if (cartNumber > 0){
        document.querySelector(".h3-span").style.visibility = "visible";
        document.querySelector(".h3-span").textContent = cartNumber
    }
}

const displayCart = function (){
    let cartNumber = Number(document.querySelector("#p6-span").textContent)

    if (cartNumber === 0){
        // document.querySelector(".h3-3").textContent;
        document.querySelector(".h3-3").style.visibility = "visible";

        let  message = "Your cart is empty";
        document.getElementById("cart-message").style.visibility= "visible"
        document.querySelector("#cart-message").textContent = message;
        document.getElementById("cart-message").style.fontFamily = "kumbh sans";
        document.getElementById("cart-message").style.fontWeight = "700";
        document.getElementById("cart-message").style.fontSize = "12px";
        document.getElementById("cart-message").style.textAlign = "center";


    }else if(cartNumber > 0) {
        document.querySelector(".h3-3").textContent;
        document.querySelector(".h3-3").style.visibility = "visible";

        document.querySelector(".cart-spacing").textContent
        document.querySelector(".cart-spacing").style.visibility = "visible";

        let numberOfItems = Number(document.querySelector("#p6-span").textContent);
        const price = 125;
        let result;
        if(numberOfItems > 0) {
            result = numberOfItems * price;
            let output1 = `$${price}.00 x ${numberOfItems} `;
            let output2 = `$${result}.00`;

            document.querySelector("#price").textContent = output1;
            document.querySelector("#bold").textContent = output2;
        }
    }
}

function deleteCart(){
    document.querySelector(".h3-3").textContent;
    document.querySelector(".h3-3").style.visibility = "visible";
    
    document.querySelector(".cart-spacing").textContent
    document.querySelector(".cart-spacing").style.visibility = "hidden";

    let  message = "Your cart is empty";
    document.getElementById("cart-message").style.visibility= "visible"
    document.querySelector("#cart-message").textContent = message;
    document.getElementById("cart-message").style.fontFamily = "kumbh sans";
    document.getElementById("cart-message").style.fontWeight = "700";
    document.getElementById("cart-message").style.fontSize = "12px";
    document.getElementById("cart-message").style.textAlign = "center";

    document.querySelector("#p6-span").textContent = 0;
    document.querySelector(".h3-span").style.visibility = "hidden";
}


    function hideCart(){
        document.querySelector("#cart-logo").addEventListener("click", function () {
            document.querySelector(".h3-3").style.display = "none";
        })
    }




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}
