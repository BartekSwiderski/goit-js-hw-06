const qs = (selector) => document.querySelector(selector)
const form = qs(".login-form");
form.addEventListener("submit", Submit);
function Submit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Wypełnij wszystkie pola!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}