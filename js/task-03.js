const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const qs = (selector) => document.querySelector(selector);
const item = qs(".gallery")
let addres = images.map(addr=>addr.url);
let descr = images.map(dscr=>dscr.alt);
let markup="";
[...images].forEach((it)=>{
  markup +=`<img style="display:flex; margin-bottom:20px"class="image" src="${it.url}" alt="${it.alt}" width="600px "/>`
})
item.insertAdjacentHTML("beforeend", markup); 

