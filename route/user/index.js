const app = require('express')()
const userRoute = require('./user')
const productRoute = require('./product')
const cartRoute = require('./cart')
const orderRoute = require("./order")

app.use("/", userRoute)
app.use("/product" , productRoute)
app.use("/cart" , cartRoute)
app.use("/order" , orderRoute)

module.exports = app