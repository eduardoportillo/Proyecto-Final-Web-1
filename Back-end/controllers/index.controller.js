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

module.exports = {
  login,
  crearUsuario,
};
