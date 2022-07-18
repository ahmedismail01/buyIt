const app = require('express').Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const controller = require('../controller/product')

app.get('/getAll' , controller.getAllProdcuts)
app.get('/getOne/:productId' , controller.getProduct)
app.post('/add' , upload.array('photos' , 6),controller.addProduct)
app.post('/delete/:productId' , controller.deleteProduct)
app.post('/update/:productId' , controller.updateProduct)

module.exports = app
