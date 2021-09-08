const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);
const boxCont = qs("#boxes");
const create = qs("[data-create]");
const destroy = qs("[data-destroy]");
const control = qs("input");
let markup="";
function getRandomHexColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}
function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
 create.addEventListener("click", () => {
  for (let i = 0; i<control.value ; i++){
    let size = `${30+(i*10)}`
    let color = getRandomHexColor();
    markup +=`<div class="bar" style="display:flex; border-radius:5px; margin-bottom:2px; width:${size}px; height:${size}px; background-color:${color}"></div>`
  }
   boxCont.insertAdjacentHTML("beforeend", markup);
   markup="";
});
destroy.addEventListener("click", () => {
  const divCounter= qsa(".bar")
  for (let j = 0; j<divCounter.length; j++){ 
    const rem = qs(".bar")
    rem.remove()}
});