const app = require('express').Router()
const controller = require('../../controller/user/cart')

app.get("/" , controller.getCart)
app.post("/addProduct"  , controller.addItemInCart)
app.post("/removeProduct"  , controller.removeItemFromCart)
app.post("/flush"  , controller.flushCart)
app.post('/useCoupon' , controller.couponCode)

module.exports = app