const express = require("express");
const datosController = require("../controllers/Datos.controller");

const api = express.Router();

api.post("/createdato", datosController.createDato);
api.get("/getdatos", datosController.getDatos);
api.patch("/updatedato/:id", datosController.updateDato);
api.delete("/deldato/:id", datosController.delDato);
api.post("/login", datosController.loginDato);

module.exports = api;