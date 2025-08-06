const express=require('express')
const router=new express.Router()

const user=require('../controlers/userLogic')

router.post('/user/signup',user.Signup)

module.exports=router