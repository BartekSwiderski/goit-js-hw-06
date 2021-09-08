const qs = (selector) => document.querySelector(selector);
const fontSize = qs("#font-size-control");
const text = qs("#text");
fontSize.addEventListener("input",() => {
text.style.fontSize = `${fontSize.value}px`})