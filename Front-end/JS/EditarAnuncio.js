function editProduct() {
  let userL = JSON.parse(localStorage.getItem("usuario_log"));

  let titulo = document.getElementById("NP");
  let descripcion = document.getElementById("Descripcion-producto");
  let Precio = document.getElementById("PP");

  let params = new URLSearchParams(window.location.search);
  let key = params.get("key");

  key = parseInt(key);
  precioFloat = parseFloat(Precio.value);

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

  let img = document.getElementById("seleccion-file");
  let data = new FormData();

  data.append("titulo", titulo.value);
  data.append("descripcion", descripcion.value);
  data.append("precio", precioFloat);
  data.append("img", img.files[0]);
  data.append("usuario_id", userL.usuario_id);
  data.append("anuncio_id", key);

  if (true) {
    fetch("http://127.0.0.1:3000/editarAnuncio", {
      method: "POST",
      body: data,
    });
    window.location.href = "./tus-anuncios.html";
  }
}
