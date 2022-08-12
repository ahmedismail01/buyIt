const app = require('express').Router()
const controller = require('../../controller/user/order')
const checkAuth = require('../../utils/checkAuth')


// app.get("/" , checkAuth , controller.listOrders)
app.get("/" , checkAuth , controller.getOrder)
app.delete("/" , checkAuth , controller.removeOrder)
app.put("/updateOrder/" , checkAuth , controller.updateOrder)
app.post("/" , checkAuth , controller.createOrder)

module.exports = app