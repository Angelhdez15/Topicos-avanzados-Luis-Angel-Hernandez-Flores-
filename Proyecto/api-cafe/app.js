const express = require('express')
const cors = require('cors')

//importar rutas
const productoRoutes = require('./routes/Producto.routes')
//configuracion express
const app = express()

//configuracion de cors
app.use(cors()) 
//exportar app
module.exports = app