let email = document.getElementById("email");
let password = document.getElementById("password");
let error = document.getElementById("error");

error.style.color = "#ce1212";

let form_login = document.getElementById("form-login");

form_login.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let mensajeError = [];

  if (email.value === null || email.value === "") {
    mensajeError.push("Ingresa un email");
  }

  if (password.value === null || password.value === "") {
    mensajeError.push("Ingresa una contraseña");
  }

  error.innerHTML = mensajeError.join(", ");
});