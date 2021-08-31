const qs = (selector) => document.querySelector(selector);

const textInput = qs("#name-input");
const output = qs("#name-output");

textInput.addEventListener("input", (event) => {
    if(event.currentTarget.value ===""){output.textContent="Anonymous"}
    else {output.textContent = event.currentTarget.value;}
});
