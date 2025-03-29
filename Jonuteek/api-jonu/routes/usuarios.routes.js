const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/usuarios.controller');

router.post('/creausuario', registrarUsuario);

module.exports = router;