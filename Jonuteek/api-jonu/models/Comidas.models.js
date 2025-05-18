const mongoose = require("mongoose");

const Comida = mongoose.Schema({
    nombreC: String,
    precioC: Number,
    cantidadC: Number,
    imageC: String, // <-- Corrige aquí
});

module.exports = mongoose.model("Comidas", Comida);