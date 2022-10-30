const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector('#ingredients');
const arrayElements = [];

ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  arrayElements.push(itemEl);
});
listEl.append(...arrayElements);
