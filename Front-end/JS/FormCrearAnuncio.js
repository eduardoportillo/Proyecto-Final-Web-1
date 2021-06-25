
// function validate(){
//   var usr = localStorage.getItem("usuario_log");
//   if(usr){
//     window.location.href = "./market-plis.html";
//   }

// }
// validate()

function sendAnuncio() {
  let userL = JSON.parse(localStorage.getItem("usuario_log"));

  let titulo = document.getElementById("NP");
  let descripcion = document.getElementById("Descripcion-producto");
  let Precio = document.getElementById("PP");
  let precioFloat;
  let activado = true;
  let error = document.getElementById("error");

  error.style.color = "#ce1212";

  if (titulo.value === null || titulo.value === "") {
    error.innerHTML = "Ingresa un titulo";
    return;
  }

  if (Precio.value === "") {
    error.innerHTML = "Ingresa un Precio";
    return;
  }

  if (descripcion.value === null || descripcion.value === "") {
    error.innerHTML = "Ingresa un descripcion";
    return;
  }

  precioFloat = parseFloat(Precio.value);

  let img = document.getElementById("seleccion-file");
  let data = new FormData();

  data.append("titulo", titulo.value);
  data.append("descripcion", descripcion.value);
  data.append("precio", precioFloat);
  data.append("img", img.files[0]);
  data.append("activado", activado);
  data.append("usuario_id", userL.usuario_id);

  if(true){
    fetch("http://127.0.0.1:3000/crearAnuncio", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      
    });
    window.location.href = "./market-plis.html";
  }
  
}
