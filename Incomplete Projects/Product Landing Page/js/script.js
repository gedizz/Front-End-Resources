const currentImage = document.querySelector("#main-image");

const imageAnimationBlur = [
  { filter: 'blur(0px)' },
  { filter: 'blur(4px)' }
];

const imageAnimationClear = [
  { filter: 'blur(4px)' },
  { filter: 'blur(0px)' }
];

const imageAnimationTiming = {
  duration: 1000,
  iterations: 1,
}

let currentIndex = 0;
const images = ["images/beer1.jpg",
  "images/beer2.jpg",
  "images/beer3.jpg",
  "images/beer4.jpg"];

// Change image on clicking of gallery image
var animationStopped = 0;
galleryImages = document.querySelector(".gallery").children;

for (const image of galleryImages) {
  image.addEventListener("click", changeImage);
}

function changeImage(event) {
  newImage = event.path[0].getAttribute("src");
  animationStopped = 1;
  currentImage.src = newImage;
}


/* initialize all dynamic content */
currentImage.src = images[currentIndex];
console.log(images.length);

window.setInterval(() => {
  if (!animationStopped) {
    currentImage.animate(imageAnimationClear, imageAnimationTiming);
    currentImage.src = images[++currentIndex % images.length];
    window.setTimeout(() => {
      currentImage.animate(imageAnimationBlur, imageAnimationTiming);
    }, 4000)
  }

}, 5000);








// Cart Quantity Selector
const quantityUp = document.getElementById("quantity-up");
const quantityDown = document.getElementById("quantity-down");
const quantityInput = document.getElementById("quantity");

currentQuantity = quantityInput.value;
// get stock from db later
var stock = 10;

quantityUp.addEventListener('click', raiseQuantity);
quantityDown.addEventListener('click', lowerQuantity);

function raiseQuantity() {
  if (currentQuantity < stock) {
    ++currentQuantity;
    quantityInput.value = currentQuantity;
  } else {
    console.log("Not enough stock")
  }
}

function lowerQuantity() {
  if (currentQuantity > 1) {
    --currentQuantity;
    quantityInput.value = currentQuantity;
  } else {
    console.log("Cant go down to 0")
  }
}


