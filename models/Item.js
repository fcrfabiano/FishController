const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    operation:{ type: String, required: true},
    product: { type: String, required: true},
    amount:{ type: Number, required: true},
    price:{ type: Number, required: true},
    date:{type: Date, default:Date.now}

})

module.exports = mongoose.model('Item', itemSchema)
