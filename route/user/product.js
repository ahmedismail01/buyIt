const app = require('express').Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const controller = require('../../controller/user/product')
const checkAuth = require('../../utils/checkAuth')
const {checkRole} = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')

app.get('/' ,checkRole(endPoints.GET_ALL_PRODUCTS),controller.listProdcuts)
app.get('/:productId' ,checkRole(endPoints.GET_PRODUCT), controller.getProduct)
app.get('/getProductByCategory/:categoryId' ,checkRole(endPoints.GET_PRODUCT_BY_CATEGORY) , controller.searchByCategory)


module.exports = app
