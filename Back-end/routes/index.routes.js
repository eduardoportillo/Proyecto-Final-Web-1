  
const { Router } = require('express');
const router = Router();

const { 
    getUser,
    insertUser
} = require('../controllers/index.controller');

router.get('/getUser', getUser);
router.post('/singUp', insertUser);

module.exports = router;