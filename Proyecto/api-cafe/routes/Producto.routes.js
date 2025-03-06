const express = require('express')  

const ProductoController = require('../controllers/Producto.controller');

const api = express.Router();

api.post("/createproducto", ProductoController.createProducto);
api.get("/getproducto", ProductoController.getProducto);
api.put("/updateproducto/:id", ProductoController.updateProducto);
api.delete("/delproducto/:id", ProductoController.delProducto);

module.exports = api;