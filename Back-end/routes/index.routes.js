  
const { Router } = require('express');
const router = Router();

const { 
    login,
  crearUsuario,
  crearProducto,
  getAnuncio,
  getAnuncioUser,
  eliminarAnuncio,
  editarAnuncio

} = require('../controllers/index.controller');

router.post('/login', login)
router.post('/singup', crearUsuario)
router.post('/crearAnuncio', crearProducto)
router.get('/anunciosActivos', getAnuncio)
router.post('/getAnuncioUser', getAnuncioUser)
router.post('/eliminarAnuncio', eliminarAnuncio)
router.post('/editarAnuncio', editarAnuncio)


module.exports = router;