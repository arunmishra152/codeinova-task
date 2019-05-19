const express = require('express')
const router = express.Router()
const Product = require('../models/products')
const auth = require('../middleware/auth')

router.get('/productlist', auth, async (req,res)=>{
    try {
        const product = await Product.find({})
    if(!product){
        res.status(404).send({msg: 'No Products in database'})
    }
    res.status(200).send(product)
    } catch (error) {
        res.status(400).send({msg: 'Something went wrong'})
    }
    
})

module.exports = router