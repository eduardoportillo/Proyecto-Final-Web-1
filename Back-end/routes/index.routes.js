  
const { Router } = require('express');
const router = Router();

const { 
    login,
    crearUsuario
} = require('../controllers/index.controller');

router.post('/login', login)
router.post('/singup', crearUsuario)

module.exports = router;