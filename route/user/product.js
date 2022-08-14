const app = require('express').Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const controller = require('../../controller/user/product')
const checkAuth = require('../../utils/checkAuth')

app.get('/' ,controller.listProdcuts)
app.get('/:productId' , controller.getProduct)
app.get('/getProductByCategory/:categoryId'  , controller.searchByCategory)
// app.post('/add' ,upload.array('photos', 6),controller.addProduct)
// app.delete('/:productId',checkAuth , controller.deleteProduct)
// app.put('/:productId' ,checkAuth ,controller.updateProduct)

module.exports = app
