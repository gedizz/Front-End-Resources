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

/* initialize all dynamic content */
currentImage.src = images[currentIndex];
console.log(images.length);

window.setInterval(() => { 
  currentImage.animate(imageAnimationClear, imageAnimationTiming);
  currentImage.src = images[++currentIndex % images.length]; 
  window.setTimeout(() => {
    currentImage.animate(imageAnimationBlur, imageAnimationTiming);
  }, 4000)
}, 5000); 