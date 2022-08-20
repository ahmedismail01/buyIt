const app = require('express').Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const controller = require('../../controller/admin/product')
const {checkRole} = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')


app.get('/' ,checkRole(endPoints.GET_ALL_PRODUCTS) ,controller.listProdcuts)
app.get('/:productId' ,checkRole(endPoints.GET_PRODUCT), controller.getProduct)
app.post('/add' ,[checkRole(endPoints.ADD_PRODUCT),upload.array('photos', 6)],controller.addProduct)
app.delete('/:productId',checkRole(endPoints.REMOVE_PRODUCT), controller.deleteProduct)
app.put('/:productId' ,checkRole(endPoints.UPDATE_PRODUCT),controller.updateProduct)

module.exports = app
