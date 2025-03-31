const mongoose = require("mongoose");

const Productos=mongoose.Schema({
    nombre:String,
    precio:Number,
    fecha:String,
    horario:String,
    cantidad:Number,
    ubicacion:String,
    imagep:String,
    createdAT:{type:Date,default:Date.now()},
    updatedAt: { type: Date, default: Date.now }, // Campo para la marca de tiempo

})

module.exports=mongoose.model("Producto",Productos);