const app = require('express').Router()
const controller = require('../../controller/user/cart')
const checkAuth = require('../../utils/checkAuth')

app.get("/" ,checkAuth, controller.listCarts)
app.get("/:cartId" ,checkAuth, controller.getCart)
app.put("/:cartId" ,checkAuth, controller.updateCart)
app.delete("/:cartId",checkAuth , controller.deleteCart)
app.post("/addProduct" , checkAuth , controller.addItemInCart)
app.post("/removeProduct" , checkAuth , controller.removeItemFromCart)
app.post("/flush" , checkAuth , controller.flushCart)


module.exports = app