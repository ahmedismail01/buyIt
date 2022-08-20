const app = require('express')()
const orderRoute = require('./order')

app.use("/order",orderRoute)

module.exports = app