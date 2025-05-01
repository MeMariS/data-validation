const form = document.getElementById("registration");

form.addEventListener("submit", () => {
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputAge = document.getElementById("age");

  const name = inputName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;
  const age = Number(inputAge.value);

  let hasError = false;

  inputName.classList.remove("error");
  inputEmail.classList.remove("error");
  inputPassword.classList.remove("error");
  inputAge.classList.remove("error");

  if (name === "") {
    alert("Имя не должно быть пустым");
    inputName.classList.add("error");
    hasError = true;
  }

  if (!email.includes("@")) {
    alert("Email должен содержать @");
    inputEmail.classList.add("error");
    hasError = true;
  }

  if (password.length < 6) {
    alert("Пароль должен содержать минимум 6 символов");
    inputPassword.classList.add("error");
    hasError = true;
  }

  if (isNaN(age) || age < 0 || age > 120) {
    alert("Возраст должен быть числом от 0 до 120");
    inputAge.classList.add("error");
    hasError = true;
  }

  if (!hasError) {
    alert("Форма успешно отправлена!");
    console.log("Имя: ", name);
    console.log("Email: ", email);
    console.log("Пароль: ", password);
    console.log("Возраст:, ", age);
    form.value = "";
  }
});
