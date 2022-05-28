const colors = ["red", "orange", "yellow", "green", "blue", "purple"];


const firstH1 = document.querySelector("h1");
const text = firstH1.textContent;
firstH1.textContent = "";


let currentColor = 0;
for(const letter of text) {
  let currentSpan = document.createElement("span");
  currentSpan.textContent = letter;
  currentSpan.style.color = colors[currentColor];

  if(Math.random() <= .5) {
    currentColor = (currentColor + 1) % 6;
  }

  firstH1.appendChild(currentSpan);
}
