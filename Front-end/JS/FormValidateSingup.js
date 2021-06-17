


function sendUser() {
  let nombre = document.getElementById("name");
  let apellido = document.getElementById("apellido");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let passwordRep = document.getElementById("repit-password");
  let error = document.getElementById("error");
  error.style.color = "#ce1212";

  if (nombre.value === null || nombre.value === "") {
    error.innerHTML = "Ingresa un nombre";
    return;
  }

  if (apellido.value === null || apellido.value === "") {
    error.innerHTML = "Ingresa un apellido";
    return;
  }

  if (email.value === null || email.value === "") {
    error.innerHTML = "Ingresa un email";
    return;
  }

  if (password.value === null || password.value === "") {
    error.innerHTML = "Ingresa un password";
    return;
  }

  if (password.value !== passwordRep.value) {
    error.innerHTML='la contraseña no son iguales';
    return;

  }

  fetch("http://localhost:3000/singup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        nombre: nombre.value,
        apellido: apellido.value,
        correo: email.value,
        password: password.value,
      },
      estado: "enviado",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = "./market-plis.html";
    });
}
