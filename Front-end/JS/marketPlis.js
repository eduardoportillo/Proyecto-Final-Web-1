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
let dataAnuncios;

cerrar.addEventListener("click", () => {
  localStorage.removeItem("usuario_log");
  window.location.href = "./index.html";
});

function getAnunciosActivos() {
  fetch("http://localhost:3000/anunciosActivos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => res.json())
    .then((data) => {
      dataAnuncios = JSON.stringify(data);
      console.log(dataAnuncios);
      let divAnuncios = document.getElementById("market-plis-div");
      // for (let i = 0; i < dataAnuncios.length; i++) {
      //   divAnuncios.innerHTML +=
      //     `<div class="divAnuncios">
      //   <P>` +
      //     dataAnuncios[i].titulo +
      //     `</P>
      //   <img src="" alt="product" id="img-anuncio">
      //   <div>
      //     <a href="#" class="button">comprar</a>
      //     <a href="#" class="button">` +
      //     dataAnuncios[i].titulo+
      //     `</a>
      //   </div>
      // </div>`;
      // }
    });
}

getAnunciosActivos();
