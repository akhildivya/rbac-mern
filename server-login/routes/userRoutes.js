
const verifyToken=require('../middlewares/authMiddleware')
const authorizeRoles=require('../middlewares/roleMiddleware')
const router=express.Router();
const express=require("express");

//only andmin can access this router
router.get("/admin",verifyToken ,authorizeRoles("admin"),(req,res)=>{
    res.json({message :"welcome admin"})
})
//both admin and manager can acess this routes
router.get("/manager",authorizeRoles("admin","manager"),(req,res)=>{
    res.json({message :"Welcome manager"})
})
//All an access this router
router.get("/user",(req,res)=>{
    res.json({message:"Welcome user"})
})
module.exports=router