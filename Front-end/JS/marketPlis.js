function validate() {
  var usrjson = {};
  var usr = localStorage.getItem("usuario_log");
  if (usr) {
    usrjson = JSON.parse(usr);
  }
  if (usrjson.correo) {
    window.location.href = "./market-plis.html";
  }
  return usrjson;
}



let cerrar = document.getElementById("cerrar");

cerrar.addEventListener("click", () => {
    localStorage.removeItem("usuario_log");
    window.location.href = "./index.html";
});