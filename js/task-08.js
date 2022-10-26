const inputEmail = document.querySelector('[type="email"]');
const inputPass = document.querySelector('[type="password"]');
const btnLog = document.querySelector('[type="submit"]');
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSendForm);

function onSendForm(event) {
  event.preventDefault();

  if (!inputEmail.value.length || !inputPass.value.length) {
    alert('Пожалуйста, заполните все поля!');
  } else {
    console.log(`${inputEmail.name}:${inputEmail.value}\n${inputPass.name}:${inputPass.value}`);
  }
  formEl.reset();
}
