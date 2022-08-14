const app = require('express').Router()
const controller = require('../../controller/user/order')


// app.get("/" , checkAuth , controller.listOrders)
app.get("/"  , controller.getOrder)
app.delete("/"  , controller.removeOrder)
app.put("/updateOrder/"  , controller.updateOrder)
app.post("/"  , controller.createOrder)

module.exports = app