const app = require('express')()
const userRoute = require('./user')
const productRoute = require('./product')
const orderRoute = require("./order")
const couponRoute = require('./coupon')
const categoryRoute = require("./category")

app.use("/", userRoute)
app.use("/product" , productRoute)
app.use("/order" , orderRoute)
app.use('/coupon' , couponRoute)
app.use('/category', categoryRoute)

module.exports = app