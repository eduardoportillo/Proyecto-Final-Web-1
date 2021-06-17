
function validate(){
  var usrjson = {};
  var usr = localStorage.getItem("usuario_log");
  if(usr){
    usrjson = JSON.parse(usr);
  }
  if(usrjson.correo){
    window.location.href = "./market-plis.html";
  }
  return usrjson;

}
validate()

function send (){
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let error = document.getElementById("error");
  
  error.style.color = "#ce1212";
  
  let button_login = document.getElementById("button-login");
  let mensajeError = [];

  if (email.value === null || email.value === "") {
    error.innerHTML = "Ingresa un email"
    return;
  }

  if (password.value === null || password.value === "") {
   error.innerHTML = "Ingresa una contraseña"
    return;
  }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      data: {
        correo: email.value,
        password: password.value,
      },
      estado: "enviado",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.estado === 'error'){
        error.innerHTML ="el email o la contraseña esta mal"
        return;
      }
      if(data.estado === 'exito'){
        localStorage.setItem("usuario_log",JSON.stringify(data.data))
        window.location.href = "./market-plis.html";
        return;
      }
      error.innerHTML ="error desconocido"
    });
  
    error.innerHTML = null;
};
