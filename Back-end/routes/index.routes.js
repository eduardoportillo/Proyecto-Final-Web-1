  
const { Router } = require('express');
const router = Router();

const { 
    login,
    crearUsuario,
    crearProducto
} = require('../controllers/index.controller');

router.post('/login', login)
router.post('/singup', crearUsuario)
router.post('/crearAnuncio', crearProducto)

module.exports = router;