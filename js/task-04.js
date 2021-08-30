const qs = (selector) => document.querySelector(selector);

const value = qs("#value");

let counterValue = 35;

const counterChange = (changeType) => {
    if (changeType === "increment") counterValue++;
    if (changeType === "decrement") counterValue--;
    value.innerText = counterValue
  }

const minusBtn = qs('[data-action="decrement"]');

minusBtn.addEventListener("click", counterChange("decrement"));

const plusBtn = qs('[data-action="increment"]');

plusBtn.addEventListener("click", counterChange("increment"));


