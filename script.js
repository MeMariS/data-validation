const form = document.getElementById("registration");

form.addEventListener("submit", (event) => {
  console.log("Submit event fired!");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const ageInput = document.getElementById("age");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const age = Number(ageInput.value);

  let hasError = false;

  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  passwordInput.classList.remove("error");
  ageInput.classList.remove("error");

  if (name === "") {
    nameInput.classList.add("error");
    hasError = true;
  }

  if (!email.includes("@")) {
    emailInput.classList.add("error");
    hasError = true;
  }

  if (password.length < 6) {
    passwordInput.classList.add("error");
    hasError = true;
  }

  if (!age || isNaN(age) || age < 0 || age > 120) {
    ageInput.classList.add("error");
    hasError = true;
  }

  if (!hasError) {
    alert("Форма успешно отправлена!");
    console.log("Имя: ", name);
    console.log("Email: ", email);
    console.log("Пароль: ", password);
    console.log("Возраст:, ", age);
    form.value = "";
  } else {
    event.preventDefault();
  }
});

function handleInputChange(event) {
  const input = event.target;
  input.classList.remove("error");

  if (input.id === inputName && input.value === "") {
    input.classList.add("error");
  }

  if (input.id === inputEmail && !input.value.includes("@")) {
    input.classList.add("error");
  }

  if (input.id === inputPassword && input.value.length < 6) {
    input.classList.add("error");
  }

  if (input.id === inputAge) {
    const age = parseInt(input.value, 10);
    if (isNaN(age) || age < 0 || age > 120) {
      input.classList.add("error");
    }
  }
}

const nameError = document.getElementById("name");
const emailError = document.getElementById("email");
const passwordError = document.getElementById("password");
const ageError = document.getElementById("age");

nameError.addEventListener("input", handleInputChange);
emailError.addEventListener("input", handleInputChange);
passwordError.addEventListener("input", handleInputChange);
ageError.addEventListener("input", handleInputChange);
