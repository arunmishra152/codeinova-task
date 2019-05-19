const express = require('express')
const router = express.Router()
const User = require('../models/users')
const jwt = require('jsonwebtoken')

router.post('/login', async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).send({msg: 'email or password is wrong'})
        }
        if(password !== user.password){
            return res.status(404).send({msg: 'email or password is wrong'})
        }
        const token = await jwt.sign({_id: user._id.toString()},'somesecretkey')
        res.send({email: user.email,token})
    } catch (error) {
        res.status(400).send({msg: 'Something went wrong'})
    }
})

module.exports = router