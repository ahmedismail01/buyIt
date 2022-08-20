const app = require('express').Router()
const controller = require('../../controller/user/cart')
const endPoints = require('../../helpers/endPoints')
const {checkRole} = require('../../utils/checkRole')

app.get("/" ,checkRole(endPoints.GET_CART), controller.getCart)
app.post("/addProduct"  ,checkRole(endPoints.ADD_PRODUCT_TO_CART), controller.addItemInCart)
app.post("/removeProduct"  ,checkRole(endPoints.REMOVE_PRODUCT_FROM_CART), controller.removeItemFromCart)
app.post("/flush"  ,checkRole(endPoints.FLUSH_CART), controller.flushCart)
app.post('/useCoupon' ,checkRole(endPoints.USE_COUPON), controller.couponCode)

module.exports = app