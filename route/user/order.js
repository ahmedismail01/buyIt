const app = require('express').Router()
const controller = require('../../controller/user/order')
const checkRole = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')

// app.get("/" , checkAuth , controller.listOrders)
app.get("/"  ,checkRole(endPoints.GET_MY_ORDERS), controller.getOrder)
app.delete("/"  ,checkRole(endPoints.DELETE_ORDER), controller.removeOrder)
app.put("/updateOrder/"  ,checkRole(endPoints.UPDATE_ORDER), controller.updateOrder)
app.post("/"  ,checkRole(endPoints.CREATE_ORDER), controller.createOrder)

module.exports = app