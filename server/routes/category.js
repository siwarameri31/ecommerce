const express = require('express')
const categoryrouter = express.Router()
const { getAllCategories, postCategory, deleteCategories, updateCategories } = require('../controllers/categories')

categoryrouter.get('/get',  getAllCategories)
categoryrouter.post('/post', postCategory)
categoryrouter.delete('/delete/:id', deleteCategories)
categoryrouter.put('/update/:id', updateCategories)

module.exports = categoryrouter