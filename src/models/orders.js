const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    }, 
    products: [{
        product_name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        unit_price: {
            type: Number
        }
    }],
    Discount: {
        type: Number
    },
    VAT: {
        type: Number,
        required: true
    },
    Order_Total: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model('Order',orderSchema)
module.exports = Order