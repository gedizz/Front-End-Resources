const cardToFlip = document.querySelector(".flip-card")
const flipButton = document.getElementById("flip-button")
const exitButton = document.getElementById("exit-button")

const imageContainer = document.querySelector(".image-container")

const leftArrow = document.getElementById("arrow-left")
const rightArrow = document.getElementById("arrow-right")


flipButton.addEventListener("click", flipCard);
exitButton.addEventListener("click", flipBack);
rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click", slideLeft);

var currentPosition = 1;

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

function flipBack() {
    cardToFlip.style.transform = "rotateY(0deg)";
    imageContainer.style.transform = "translateX(0px)";
    currentPosition = 1;
}

function flipCard() {
    cardToFlip.style.transform = "rotateY(180deg)";
}

