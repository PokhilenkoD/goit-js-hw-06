let counterValue = 0;
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const resultEl = document.querySelector('#value');

btnIncrement.addEventListener('click', onClick);
btnDecrement.addEventListener('click', onClick);

function onClick(event) {
  if (event.currentTarget === btnIncrement) {
    resultEl.textContent = counterValue += 1;
  } else {
    resultEl.textContent = counterValue -= 1;
  }
}
