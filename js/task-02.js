const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const qs = (selector) => document.querySelector(selector);

const list = qs("#ingredients");

ingredients.forEach((i) => {
 let item=document.createElement("li");
  item.textContent = i;
  item.className = 'item'
  list.append(item)
})