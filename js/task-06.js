const qs = (selector) => document.querySelector(selector);
const charInput = qs("#validation-input")
const charLength = charInput.getAttribute("data-length")
charInput.addEventListener("blur", () => {
   if (charInput.value.length == charLength ) {
            charInput.classList.remove("invalid")
            charInput.classList.add("valid")}

   else {charInput.classList.remove("valid")
       charInput.classList.add("invalid")}
  });

 