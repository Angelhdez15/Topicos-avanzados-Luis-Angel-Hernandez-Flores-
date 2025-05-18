const express=require("express");
const multiparty=require("connect-multiparty");

const ComidasController=require("../controllers/Comidas.controller");

const md_mparty=multiparty({uploadDir:"./uploadsC"});
const api=express.Router();

api.post("/createc",[md_mparty], ComidasController.createComida);
api.get("/getc", ComidasController.getComida);
api.patch("/updatec/:id",[md_mparty],ComidasController.updateComida);
api.delete('/delc/:id', ComidasController.delComida);

module.exports=api;