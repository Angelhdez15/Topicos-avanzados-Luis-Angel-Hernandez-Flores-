const mongoose = require("mongoose");

const DatosSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    usuario: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    sexo: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Datos", DatosSchema);