const jwt = require('jsonwebtoken')
const Product = require('../models/products')

const auth = async (req,res,next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decoder = await jwt.verify(token, 'somesecretkey')
        next();
    } catch (error) {
        res.status(401).send('please authenticate')
    }
}

module.exports = auth


