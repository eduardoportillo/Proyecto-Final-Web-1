  
const { Router } = require('express');
const router = Router();

const { 
    login,
    crearUsuario,
    crearProducto,
    getAnuncio
} = require('../controllers/index.controller');

router.post('/login', login)
router.post('/singup', crearUsuario)
router.post('/crearAnuncio', crearProducto)
router.get('/anunciosActivos', getAnuncio)

module.exports = router;