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
  res.json(req.body.estado);
};

const crearProducto = async (req, res) => {
  let titulo = req.body.titulo;
  let descripcion = req.body.descripcion;
  let precio = req.body.precio;
  let activado = req.body.activado;
  let usuario_id = req.body.usuario_id;

  if (req.file !== undefined) {
    let path_multer = req.file.path;
    let name_img = path_multer.substring(4, path_multer.length);
    url_fotografia = "/" + "img" + "/" + name_img;
  } else {
    url_fotografia = "img-noinsertada";
    res.json({ estado: "la imagen esta indefinida" });
  }

  const crearAnuncio = await pool.query(
    "INSERT INTO anuncio (titulo, descripcion, precio, url_fotografia, activado, usuario_id) VALUES($1, $2, $3, $4, $5, $6)",
    [titulo, descripcion, precio, url_fotografia, activado, usuario_id]
  );

  req.body.estado = "enviado";

  res.json(req.body.estado);
};

const getAnuncio = async (req, res) => {
  const anuncioActivo = await pool.query(
    "select correo , anuncio_id, titulo, descripcion, url_fotografia from anuncio A join usuario U on A.usuario_id  = U.usuario_id where activado = true"
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
  let titulo = req.body.titulo;
  let descripcion = req.body.descripcion;
  let precio = req.body.precio;
  let usuario_id = req.body.usuario_id;
  let anuncio_id = req.body.anuncio_id;

  if (req.file !== undefined) {
    let path_multer = req.file.path;
    let name_img = path_multer.substring(4, path_multer.length);
    url_fotografia = "/" + "img" + "/" + name_img;
  } else {
    url_fotografia = "/img-no/insertada";
    res.json({ estado: "la imagen esta indefinida" });
  }

  const anuncioActivo = await pool.query(
    "UPDATE anuncio SET titulo=$1, descripcion=$2, precio=$3, url_fotografia=$4, activado=true, usuario_id=$5 WHERE anuncio_id=$6",
    [titulo, descripcion, precio, url_fotografia, usuario_id, anuncio_id]
  );

  res.json({ estado: "anuncio editado" });
};

const editAnuncioActivo = async (req, res) => {
  const { data } = req.body;

  let activo = data.activo;
  let anuncio_id = data.anuncio_id;

  const insetActico = await pool.query(
    "UPDATE anuncio SET activado=$1 WHERE anuncio_id=$2",
    [activo, anuncio_id]
  );

  res.json(req.body.estado);
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
