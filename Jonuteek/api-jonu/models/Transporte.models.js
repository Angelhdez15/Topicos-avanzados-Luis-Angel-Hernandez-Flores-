const mongoose = require("mongoose");

const Transporte=mongoose.Schema({
    nombret:String,
    preciot:Number,
    fechat:String,
    horariot:String,
    cantidadt:Number,
    imagept: String, 
    createdAt:{type:Date,default:Date.now()}
})

module.exports=mongoose.model("Transporte",Transporte);