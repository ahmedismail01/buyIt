const app = require('express').Router()
const controller = require('../../controller/admin/order')
const checkAuth = require('../../utils/checkAuth')
const {checkRole} = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')

app.get("/" ,checkRole(endPoints.GET_ALL_ORDERS)  , controller.listOrders)
app.get("/:orderId" , checkRole(endPoints.GET_ORDER) , controller.getOrder)
app.post('/setDeliveryEgent/:orderId' , checkRole(endPoints.SET_DELIVERY_EGENT) , controller.setDeliveryEgent)


module.exports = app