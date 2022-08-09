const app = require('express').Router()
const controller = require('../../controller/user/order')
const checkAuth = require('../../utils/checkAuth')


app.get("/" , checkAuth , controller.listOrders)
app.get("/:orderId" , checkAuth , controller.getOrder)
app.delete("/:orderId" , checkAuth , controller.removeOrder)
app.put("/updateOrder/:orderId" , checkAuth , controller.updateOrder)
app.post("/" , checkAuth , controller.createOrder)
app.post("/createOrder" , checkAuth , controller.createOrder)


module.exports = app