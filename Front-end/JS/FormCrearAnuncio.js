
function sendAnuncio() {
  let userL = JSON.parse(localStorage.getItem("usuario_log"));

  let titulo = document.getElementById("NP");
  let descripcion = document.getElementById("Descripcion-producto");
  let Precio = document.getElementById("PP");
  let foto = "url / ver / como / manejar / fotos / despues"
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

  
  fetch("http://localhost:3000/crearAnuncio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        data: {
        titulo: titulo.value,
        descripcion: descripcion.value,
        precio:  5,
        url_fotografia: foto,
        activado: activado,
        usuario_id: userL.usuario_id
      },
      estado: "enviado",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = "./tus-anuncios.html";
    });
}
