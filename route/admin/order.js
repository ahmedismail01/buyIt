const app = require('express').Router()
const controller = require('../../controller/admin/order')
const checkAuth = require('../../utils/checkAuth')


app.get("/" , checkAuth , controller.listOrders)
app.get("/:orderId" , checkAuth , controller.getOrder)


module.exports = app