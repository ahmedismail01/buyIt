const app = require('express')()
const orderRoute = require('./order')

app.use(orderRoute)

module.exports = app