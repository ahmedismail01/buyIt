const app = require('express').Router()
const controller = require('../../controller/admin/cart')
const checkAuth = require('../../utils/checkAuth')

app.get("/" ,checkAuth, controller.listCarts)
app.get("/:cartId" ,checkAuth, controller.getCart)

module.exports = app