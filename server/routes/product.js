const express = require('express')
const productrouter = express.Router()
const { getAllProducts, postProducts, deleteProducts, updateProducts ,  getOne } = require('..//controllers/products')

productrouter.get('/get', getAllProducts)
productrouter.get('/getone/:id', getOne)
productrouter.post('/post', postProducts)
productrouter.delete('/delete/:id', deleteProducts)
productrouter.put('/update/:id', updateProducts)

module.exports = productrouter