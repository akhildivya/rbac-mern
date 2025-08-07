const users = require('../models/usermodel')

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
exports.Signup = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new users({ username, password: hashedPassword, role });
        await newUser.save()
        res.status(201).json({ message: `user registered with username ${username}` })
    }
    catch (err) {
        res.status(401).json({ message: "something went wrong" })
    }
}
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await users.findOne({ username })
        if(!user)
        {
            res.status(404).json({meaasge:`user with username ${username} not found`})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch)
        {
            res.status(404).json({meaasge:'invald credientianls'})
        }
        const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1h"})
        res.status(200).json({token




            
        })
    }
    catch(err)
    {
        res.status(401).json({ message: "err" })
    }

}