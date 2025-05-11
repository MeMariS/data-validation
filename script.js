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
  const id = input.id;
  const errorMessageEl = document.getElementById(`error-${id}`)  
  

  if (input.id === 'name' && input.value === "") {
    input.classList.add("error");
    errorMessageEl.classList.remove("hidden");
    return;
  }

  if (input.id === 'email' && !input.value.includes("@")) {
    input.classList.add("error");
    errorMessageEl.classList.remove("hidden");
    return;
  }

  if (input.id === 'password' && input.value.length < 6) {
    input.classList.add("error");
    errorMessageEl.classList.remove("hidden");
    return;
  }

  if (input.id === 'age') {
    const age = parseInt(input.value, 10);
    if (isNaN(age) || age < 0 || age > 120) {
      input.classList.add("error");
      errorMessageEl.classList.remove("hidden");
      return;
    }
  }

  errorMessageEl.classList.add("hidden");
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const ageInput = document.getElementById("age");

nameInput.addEventListener("input", handleInputChange);
emailInput.addEventListener("input", handleInputChange);
passwordInput.addEventListener("input", handleInputChange);
ageInput.addEventListener("input", handleInputChange);
