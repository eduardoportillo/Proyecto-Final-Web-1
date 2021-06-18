function getUser() {
  var usrjson = {};
  var usr = localStorage.getItem("usuario_log");
  if (usr) {
    usrjson = JSON.parse(usr);
  }
  if (!usrjson.correo) {
    window.location.href = "./market-plis.html";
  }
  return usrjson;
}

function init() {
  let cerrar = document.getElementById("cerrar");

  cerrar.addEventListener("click", () => {
    localStorage.removeItem("usuario_log");
    window.location.href = "./index.html";
  });
  let UserAuth = getUser();

  fetch("http://localhost:3000/getAnuncioUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario_id: UserAuth.usuario_id }),
  })
    .then((res) => res.json())
    .then((data) => {
      dataAnunciosUser = data;
      let divAnuncios = document.getElementById("market-plis-div");

      console.log(divAnuncios);

      for (let i = 0; i < dataAnunciosUser.length; i++) {
        divAnuncios.innerHTML +=
          `<div class="divAnuncios">
          <P>` +
          dataAnunciosUser[i].titulo +
          `</P>
          <img src="" alt="product" id="img-anuncio">
          <div>
            <a  onclick="clickeditar('` +
          dataAnunciosUser[i].anuncio_id +
          `')" class="button">Editar</a>
            <a  onclick="clickeliminar(` +
            dataAnunciosUser[i].anuncio_id +
            `)" class="button">Eliminar</a>
            <input type="checkbox" checked="true">Activar
          </div>
        </div>`;
      }
    });
}
init();

function clickeditar(key) {
  window.location.href = "./Editar-anuncio.html?key="+key;
}

function clickeliminar(key){

    fetch("http://localhost:3000/eliminarAnuncio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        anuncioID: key
    }),
  })
    .then((res) => res.json())
    .then((data) => {
        window.location.reload()
    });
}