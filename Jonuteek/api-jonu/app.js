const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path");

//importar rutas
const productoRsoute = require('./routes/Producto.routes')
const transporteRsoute = require('./routes/Transporte.routes')
//configuracion express
const app = express()

//  Paesear la informacion
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//configurar carpeta de carga de files
//app.use(express.static("uploads"))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploadsT", express.static(path.join(__dirname, "uploadsT")));

//configuracion de cors
app.use(cors()) 
//uso de ruta
app.use('/api',productoRsoute )
app.use('/api',transporteRsoute )
//exportar app
module.exports = app