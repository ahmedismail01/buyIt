const app = require('express')()
const userRoute = require('./user')
const productRoute = require('./product')
const orderRoute = require('./order')

app.use("/", userRoute)
app.use("/product" , productRoute)
app.use("/order" , orderRoute)

module.exports = app