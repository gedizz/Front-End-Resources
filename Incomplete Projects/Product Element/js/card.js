const productCard = document.querySelector(".product-card");
const infoCard = document.getElementById("card-info");
const sizesColors = document.getElementById("pop-up")

productCard.addEventListener("mouseover", cardHover);
productCard.addEventListener("mouseleave", cardReset);



function cardHover() {
    console.log("hovered")
    infoCard.classList.add("card-move");
    infoCard.style.overflow = "visible";
    
}

function cardReset() {
    console.log("mouse left");
    infoCard.classList.remove("card-move");
    infoCard.style.overflow = "hidden";
}

function showSizesColors() {
    
}