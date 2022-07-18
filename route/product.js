const app = require('express').Router()
const controller = require('../controller/product')

app.get('/getAll' , controller.getAllProdcuts)
app.get('/getOne/:productId' , controller.getProduct)
app.post('/add' , controller.addProduct)
app.post('/delete/:productId' , controller.deleteProduct)
app.post('/update/:productId' , controller.updateProduct)

module.exports = app
