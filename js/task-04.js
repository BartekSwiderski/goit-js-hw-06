const qs = (selector) => document.querySelector(selector);
const value = qs("#value");
let  counterValue = 0;

const btnClick = (a) => {
   if (a ==='minus') counterValue--;
   if (a ==='plus') counterValue++;
    value.innerHTML = counterValue
};

const minusBtn = qs('[data-action="decrement"]');
const plusBtn = qs('[data-action="increment"]');

minusBtn.addEventListener("click", (a) => btnClick('minus'));
plusBtn.addEventListener("click", (a) => btnClick('plus'));