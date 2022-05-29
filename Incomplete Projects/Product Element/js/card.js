const productCard = document.querySelector(".product-card")
const infoCard = document.getElementById("card-info")
const sizesColors = document.getElementById("pop-up")

const cardToFlip = document.querySelector(".flip-card")
const flipButton = document.getElementById("flip-button")

productCard.addEventListener("mouseover", cardHover);
productCard.addEventListener("mouseleave", cardReset);
flipButton.addEventListener("click", flipCard);

function flipCard() {
    cardToFlip.style.transform = "rotateY(180deg)";
}


function cardHover() {
    infoCard.classList.add("card-move");
    infoCard.style.overflow = "visible";
    
}

function cardReset() {
    infoCard.classList.remove("card-move");
    infoCard.style.overflow = "hidden";
}