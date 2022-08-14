const app = require('express').Router()
const controller = require('../../controller/delivery/order')

app.get('/:orderId' , controller.getOrder)
app.get('/' , controller.listOrders)

module.exports = app

