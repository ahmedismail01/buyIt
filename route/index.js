const app = require('express')()
const userRoute = require('./user')
const adminUserRoute = require("./admin/user")
const adminProductRoute = require("./admin/product")
const productRoute = require('./product')

app.use("/user", userRoute)
app.use("/product" , productRoute)

module.exports = app