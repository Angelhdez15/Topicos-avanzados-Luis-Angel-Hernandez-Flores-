// controllers/usuario.controller.js
const Usuario = require('../models/usuarios.models');

async function registrarUsuario(req, res) {
    const { nombre, apellido, edad, usuario, contrasena, correo, telefono, sexo } = req.body;

    try {
        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ usuario });
        if (usuarioExistente) {
            return res.status(400).json({ msg: "El nombre de usuario ya está en uso" });
        }

        // Crear nuevo usuario
        const nuevoUsuario = new Usuario({
            nombre,
            apellido,
            edad,
            usuario,
            contrasena, // En producción, deberías hashear la contraseña aquí
            correo,
            telefono,
            sexo
        });

        await nuevoUsuario.save();
        res.status(201).json({ msg: "Usuario registrado exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al registrar el usuario" });
    }
}

module.exports = {
    registrarUsuario
};