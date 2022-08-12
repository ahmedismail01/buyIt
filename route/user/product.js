const app = require('express').Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const controller = require('../../controller/user/product')
const checkAuth = require('../../utils/checkAuth')

app.get('/' ,checkAuth ,controller.listProdcuts)
app.get('/:productId' ,checkAuth, controller.getProduct)
// app.post('/add' ,upload.array('photos', 6),controller.addProduct)
// app.delete('/:productId',checkAuth , controller.deleteProduct)
// app.put('/:productId' ,checkAuth ,controller.updateProduct)

module.exports = app
