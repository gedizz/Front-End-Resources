const productCard = document.querySelector(".product-card")
const infoCard = document.getElementById("card-info")
const sizesColors = document.getElementById("pop-up")

const cardToFlip = document.querySelector(".flip-card")
const flipButton = document.getElementById("flip-button")

const imageContainer = document.querySelector(".image-container")
const imageContainerChildren = imageContainer.children;

const leftArrow = document.getElementById("arrow-left")
const rightArrow = document.getElementById("arrow-right")
const exitButton = document.getElementById("exit-button")


productCard.addEventListener("mouseover", cardHover);
productCard.addEventListener("mouseleave", cardReset);
flipButton.addEventListener("click", flipCard);

exitButton.addEventListener("click", flipBack);

rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click", slideLeft);

var currentPosition = 1;
var imageId = 1;

// on page load set the ID of each image and increment by 1. 
// first image is id=1 second image is id=2 etc
function setImageIds() {
    for (const image of imageContainerChildren) {
        image.id = imageId;
        ++imageId;
        console.log(image.id);
    }
}

setImageIds();


function hideImagesNotDisplayed() {
    for (const image of imageContainerChildren) {
        if (image.id != currentPosition) {
            image.style.display = "none";
        }
    }
}

hideImagesNotDisplayed()

function slideRight() {
    if (currentPosition == 1) {
        imageContainer.style.transform = "translateX(-333px)";
        currentPosition += 1;
    } else if (currentPosition == 2) {
        imageContainer.style.transform = "translateX(-666px)";
        currentPosition += 1;

    }

}

function slideLeft() {
    if (currentPosition == 2) {
        imageContainer.style.transform = "translateX(0px)";
        currentPosition -= 1;
    } else if (currentPosition == 3) {
        imageContainer.style.transform = "translateX(-333px)";
        currentPosition -= 1;
    }
}



function flipCard() {
    cardToFlip.style.transform = "rotateY(180deg)";
}

function flipBack() {
    cardToFlip.style.transform = "rotateY(0deg)";
}


function cardHover() {
    infoCard.classList.add("card-move");
    infoCard.style.overflow = "visible";
    
}

function cardReset() {
    infoCard.classList.remove("card-move");
    infoCard.style.overflow = "hidden";
}