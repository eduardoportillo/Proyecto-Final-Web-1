const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");
const mime = require("mime");

const {
  login,
  crearUsuario,
  crearProducto,
  getAnuncio,
  getAnuncioUser,
  eliminarAnuncio,
  editarAnuncio,
  editAnuncioActivo,
} = require("../controllers/index.controller");

let UID = Math.floor(Math.random() * 9999999999999999);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    ext = ext.length > 1 ? ext : "." + mime.extension(file.mimetype);
    const fileName = UID + "-" + Date.now() + ext;
    cb(null, fileName);
  },
});

let upload = multer({ storage: storage })

router.post("/login", login);
router.post("/singup", crearUsuario);
router.post("/crearAnuncio", upload.single('img'), crearProducto);
router.get("/anunciosActivos", getAnuncio);
router.post("/getAnuncioUser", getAnuncioUser);
router.post("/eliminarAnuncio", eliminarAnuncio);
router.post("/editarAnuncio", upload.single('img'), editarAnuncio);
router.post("/editAnuncioActivo", editAnuncioActivo);

module.exports = router;
