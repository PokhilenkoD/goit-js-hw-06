function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

bodyEl.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor() {
  const changeColor = getRandomHexColor();

  bodyEl.style.backgroundColor = changeColor;
  spanEl.textContent = changeColor;
}
