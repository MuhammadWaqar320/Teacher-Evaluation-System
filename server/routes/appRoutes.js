const express=require("express");
const {createAdmin}=require("../controllers/adminController")
const router=express.Router();
// admin routes are here
router.post("/admin/create",createAdmin)













module.exports={
    router
}