const app = require('express')()
const userRoute = require('./user/index')
const adminRoutes = require("./admin/index")
const deliveryRoutes = require('./delivery/index')
const auth = require('./auth')
const checkAuth = require('../utils/checkAuth')


app.use("/api/v1/auth/" , auth)
app.use("/api/v1/admin",checkAuth, adminRoutes)
app.use("/api/v1/user",checkAuth, userRoute)
app.use('/api/v1/delivery' , checkAuth , deliveryRoutes)

module.exports = app