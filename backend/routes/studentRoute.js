const express=require("express");
const route=express.Router();
const stuController=require("../controller/studentController")
route.post("/stulogin",stuController.userLogin);
route.post("/stuRegistration",stuController.userRegistration)

module.exports=route;