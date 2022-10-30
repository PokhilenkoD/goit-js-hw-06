const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSendForm);

function onSendForm(event) {
  event.preventDefault();

  if (!formEl.elements.email.value.length || !formEl.elements.password.value.length) {
    return alert('Пожалуйста, заполните все поля!');
  } else {
    const newObj = {};

    newObj.email = formEl.elements.email.value;
    newObj.password = formEl.elements.password.value;
    console.log(newObj);
  }
  formEl.reset();
}
