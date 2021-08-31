const qs = (selector) => document.querySelector(selector);

const widg = qs("body");
const colTxt = qs(".color");
const btn = qs(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", () => {
  const col = getRandomHexColor();
  colTxt.innerHTML = col
  widg.style.backgroundColor = col
});