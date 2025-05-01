const form = document.getElementById('registration');

form.addEventListener('submit', (event) => {
  console.log('Submit event fired!');
  const inputName = document.getElementById('name');
  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');
  const inputAge = document.getElementById('age');

  const name = inputName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;
  const age = Number(inputAge.value);

  let hasError = false;

  inputName.classList.remove('error');
  inputEmail.classList.remove('error');
  inputPassword.classList.remove('error');
  inputAge.classList.remove('error');

  if (name === '') {
    inputName.classList.add('error');
    hasError = true;
  }

  if (!email.includes('@')) {
    inputEmail.classList.add('error');
    hasError = true;
  }

  if (password.length < 6) {
    inputPassword.classList.add('error');
    hasError = true;
  }

  if (!age || isNaN(age) || age < 0 || age > 120) {
    inputAge.classList.add('error');
    hasError = true;
  }

  if (!hasError) {
    alert('Форма успешно отправлена!');
    console.log('Имя: ', name);
    console.log('Email: ', email);
    console.log('Пароль: ', password);
    console.log('Возраст:, ', age);
    form.value = '';
  } else {
    event.preventDefault();
  }
});

// const parentDiv = document.getElementById('parent');

// parentDiv.addEventListener('click', (event) => {
//   console.log(event.target.id);
// });
