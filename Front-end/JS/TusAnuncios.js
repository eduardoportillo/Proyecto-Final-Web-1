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
  // let checkbox = document.getElementById("checkbox");

  // console.log(checkbox.checked);

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

      

      for (let i = 0; i < dataAnunciosUser.length; i++) {
        let elemCheckBox = "checkbox" + dataAnunciosUser[i].anuncio_id;
        if(dataAnunciosUser[i].activado){
          checked = `checked="true"`
        }else{
          checked = " "
        }

        divAnuncios.innerHTML +=
          `<div class="divAnuncios">
          <P>` +
          dataAnunciosUser[i].titulo +
          `</P>
          <div class="img-anuncio">
          <img src="http://localhost:3000`+dataAnunciosUser[i].url_fotografia+`" alt="productsvg" >
          </div>
          <div>
          <p> Descripción: </p>
          <p style="color: black; font-size: 14px;">` +
          dataAnunciosUser[i].descripcion + `</p>
          <a href="#" class="button">comprar</a>
          <a href="#" class="button">$` +
          dataAnunciosUser[i].precio + 
          `</a>
          </div>
          <div>
            <a  onclick="clickeditar('` +
          dataAnunciosUser[i].anuncio_id +
          `')" class="button" style="cursor: pointer;">Editar</a>
            <a  onclick="clickeliminar(` +
          dataAnunciosUser[i].anuncio_id +
          `)" class="button" style="cursor: pointer;">Eliminar</a>
            <input type="checkbox" `+ checked +` id="`+elemCheckBox+`" onclick="booleanCheckBox(`+dataAnunciosUser[i].anuncio_id+`, `+elemCheckBox+`)" >Activar
          </div>
        </div>`;
      }
    });
}
init();

function clickeditar(key) {
  window.location.href = "./Editar-anuncio.html?key=" + key;
}

function clickeliminar(key) {
  fetch("http://localhost:3000/eliminarAnuncio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      anuncioID: key,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.reload();
    });
}

function booleanCheckBox(key, element){

  if(element.checked){
    fetch("http://localhost:3000/editAnuncioActivo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        activo: true,
        anuncio_id: key
      }
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
    });
    
  }else{
    fetch("http://localhost:3000/editAnuncioActivo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        activo: false,
        anuncio_id: key
      }
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
    });
  }
  
}
