const app = require('express').Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const controller = require('../controller/product')
const checkAuth = require('../utils/checkAuth')

app.get('/getAll' ,checkAuth ,controller.getAllProdcuts)
app.get('/getOne/:productId' ,checkAuth, controller.getProduct)
app.post('/add' ,checkAuth, upload.array('photos' , 6),controller.addProduct)
app.post('/delete/:productId',checkAuth , controller.deleteProduct)
app.post('/update/:productId' ,checkAuth ,controller.updateProduct)

module.exports = app
