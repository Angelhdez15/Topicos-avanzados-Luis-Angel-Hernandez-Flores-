const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path");

//importar rutas
const productoRsoute = require('./routes/Producto.routes')

//configuracion express
const app = express()

//  Paesear la informacion
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//configurar carpeta de carga de files
//app.use(express.static("uploads"))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//configuracion de cors
app.use(cors()) 
//uso de rutas
app.use('/api',productoRsoute)
//exportar app
module.exports = app