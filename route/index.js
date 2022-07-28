const app = require('express')()
const userRoute = require('./user/index')
const adminProductRoute = require("./admin/product")



// app.use("/api/v1/admin", adminRoutes)
app.use("/api/v1/user", userRoute)

module.exports = app