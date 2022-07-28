const app = require('express').Router()
const controller = require('../../controller/order')
const checkAuth = require('../../utils/checkAuth')

app.get("/" ,checkAuth, controller.listOrders)
app.get("/:orderId" ,checkAuth, controller.getOrder)
app.post("/" ,checkAuth, controller.createOrder)
app.put("/:orderId" ,checkAuth, controller.updateOrder)
app.delete("/:orderId",checkAuth , controller.deleteOrder)

module.exports = app