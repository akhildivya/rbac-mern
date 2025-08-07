const express=require('express')
const router=new express.Router()

const user=require('../controlers/userLogic')

router.post('/signup',user.Signup)
router.post('/login',user.login)

module.exports=router
