const app = require('express').Router()
const controller = require('../../controller/delivery/order')
const {checkRole} = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')

app.get('/:orderId' ,checkRole(endPoints.GET_ORDER), controller.getOrder)
app.get('/' ,checkRole(endPoints.GET_MY_ORDERS), controller.listOrders)
app.post('/:orderId' , checkRole(endPoints.SET_ORDER_TO_DELIVERED) , controller.setOrderStatus)

module.exports = app

