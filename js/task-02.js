const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

ingredients.forEach((i) => {
 let item=document.createElement("li");
  item.textContent = i;
  item.className = 'item'
  list.append(item)
})