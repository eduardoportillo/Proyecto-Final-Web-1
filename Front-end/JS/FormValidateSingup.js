let nombre = document.getElementById("name");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordRep = document.getElementById("repit-password");
let error = document.getElementById("error");

error.style.color = "#ce1212";

let form_singup = document.getElementById("form-singup");

form_singup.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let mensajeError = [];

  if (nombre.value === null || nombre.value === "") {
    mensajeError.push("Ingresa un nombre");
  }

  if (apellido.value === null || apellido.value === "") {
    mensajeError.push("Ingresa una apellido");
  }

  if (email.value === null || email.value === "") {
    mensajeError.push("Ingresa un email");
  }

  if (password.value === null || password.value === "") {
    mensajeError.push("Ingresa una contraseña");
  }

  // if (password.value !== passwordRep.value) {
  //     mensajeError.push('la contraseña no son iguales');
  // }

  error.innerHTML = mensajeError.join(", ");

  if (mensajeError.length === 0) {
    let user = JSON.stringify({
      nombre: nombre.value,
      apellido: apellido.value,
      correo: email.value,
      password: password.value
    });

    console.log(user + "type: " + typeof user);

    fetch("http://localhost:3000/singUp", {
      method: "POST",
      body: user
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    return true;
  }
});
