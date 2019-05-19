const express = require('express')
const router = express.Router()
const Order = require('../models/orders')
const Product = require('../models/products')

router.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    let orderTotal = 0;
    const discount = order.Discount ? order.Discount : 0
    const VAT = order.VAT ? order.VAT : 0
    try {
        let productName = order.products.map(name => name.product_name);
    const products = await Product.find({ name: productName });
    if (products.length !== order.products.length) {
        return res.status(404).send({
            msg: 'product not found'
        })
    }
    products.forEach((product) =>{
            let pro = order.products.find(p => p.product_name == product.name)
            orderTotal += VAT + (product.price * pro.quantity) - discount;
        })
    res.status(200).send({totol:orderTotal})
    } catch (error) {
        re.status(400).send('Something went wrong')
    }
})

module.exports = router