const mongoose = require("mongoose");

const Productos=mongoose.Schema({
    nombre:String,
    precio:Number,
    descripcion:String,
    cantidas:Number,
    imagep:String,
    createdAT:{type:Date,default:Date.now()}
})

module.exports=mongoose.model("Producto",Productos);