const refs = {
  items: document.querySelectorAll('.item'),
};

console.log(`Number of categories: ${refs.items.length}`);

refs.items.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
