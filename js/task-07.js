const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeStyle);

function onChangeStyle() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
