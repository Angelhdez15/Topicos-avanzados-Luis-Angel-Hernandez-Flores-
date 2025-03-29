// models/usuario.models.js
const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    usuario: { type: String, unique: true },
    contrasena: String,
    correo: String,
    telefono: String,
    sexo: String,
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);