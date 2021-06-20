const pool = require("../src/database");

const login = async (req, res) => {
  const { data, estado } = req.body;
  try {
    let correo = data.correo;
    let password = data.password;

    const userRegistrado = await pool.query(
      "select * from usuario where correo = $1 and password = $2",
      [correo, password]
    );

    if (userRegistrado.rows.length === 0) {
      req.body.estado = "error";
    } else {
      req.body.data = userRegistrado.rows[0];
      req.body.estado = "exito";
    }
  } catch (error) {
    req.body.estado = "error";
  }
  res.json(req.body);
};

const crearUsuario = async (req, res) => {
  const { data, estado } = req.body;

  let nombre = data.nombre;
  let apellido = data.apellido;
  let correo = data.correo;
  let password = data.password;

  try {
    const userRegistrado = await pool.query(
      "select * from usuario where correo = $1",
      [correo]
    );

    if (userRegistrado.rows.length > 0) {
      req.body.estado = "error";
    } else {
      const userRegistrado = await pool.query(
        "INSERT INTO usuario (apellido, correo, nombre, password) VALUES($1, $2, $3, $4);",
        [apellido, correo, nombre, password]
      );
      req.body.estado = "exito";
    }
  } catch (e) {
    req.body.estado = "error";
  }
  res.json(req.body);
};

const crearProducto = async (req, res) => {
  const { data, estado } = req.body;

  let titulo = data.titulo;
  let descripcion = data.descripcion;
  let precio = data.precio;
  let url_fotografia = data.url_fotografia;
  let activado = data.activado;
  let usuario_id = data.usuario_id;

  const crearAnuncio = await pool.query(
    "INSERT INTO anuncio (titulo, descripcion, precio, url_fotografia, activado, usuario_id) VALUES($1, $2, $3, $4, $5, $6)",
    [titulo, descripcion, precio, url_fotografia, activado, usuario_id]
  );

  req.body.estado = "enviado";

  res.json(req.body.estado);
};

const getAnuncio = async (req, res) => {
  const anuncioActivo = await pool.query(
    "select * from anuncio where activado = true"
  );

  res.json(anuncioActivo.rows);
};

const getAnuncioUser = async (req, res) => {
  const { usuario_id } = req.body;

  const getAnuncioUser = await pool.query(
    "select * from anuncio where usuario_id = $1",
    [usuario_id]
  );

  res.json(getAnuncioUser.rows);
};

const eliminarAnuncio = async (req, res) => {
  const { anuncioID } = req.body;
  const anuncioUserDelete = await pool.query(
    "DELETE FROM anuncio WHERE anuncio_id=$1",
    [anuncioID]
  );
  res.json({ estado: "delete succesfull" });
};

const editarAnuncio = async (req, res) => {
  const { data, estado } = req.body;
  let titulo = data.titulo;
  let descripcion = data.descripcion;
  let precio = data.precio;
  let url_fotografia = data.url_fotografia;
  let usuario_id = data.usuario_id;
  let anuncio_id = data.anuncio_id;

  const anuncioActivo = await pool.query(
    "UPDATE anuncio SET titulo=$1, descripcion=$2, precio=$3, url_fotografia=$4, activado=true, usuario_id=$5 WHERE anuncio_id=$6",
    [titulo, descripcion, precio, url_fotografia, usuario_id, anuncio_id]
  );

  res.json({ estado: "anuncio editado" });
};

const uploadfoto = async (req, res) => {
  const { img } = req.body;
};

const editAnuncioActivo = async (req, res) => {
  const { data } = req.body;

  let activo = data.activo;
  let anuncio_id = data.anuncio_id;

  const insetActico = await pool.query(
    "UPDATE anuncio SET activado=$1 WHERE anuncio_id=$2",
    [activo, anuncio_id]
  );

  res.json({estado: "activo actualizado"})
};

module.exports = {
  login,
  crearUsuario,
  crearProducto,
  getAnuncio,
  getAnuncioUser,
  editarAnuncio,
  eliminarAnuncio,
  editarAnuncio,
  editAnuncioActivo,
};
