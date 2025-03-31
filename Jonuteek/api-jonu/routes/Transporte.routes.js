const express=require("express");
const multiparty=require("connect-multiparty");

const TransporteController=require("../controllers/Transporte.controller");

const md_mparty=multiparty({uploadDir:"./uploadsT"});
const api=express.Router();

api.post("/createT",[md_mparty], TransporteController.createTransporte);
api.get("/getT", TransporteController.getTransporte);
api.patch("/updateT/:id",[md_mparty],TransporteController.updateTransporte);
api.delete('/delT/:id', TransporteController.delTransporte);

module.exports=api;