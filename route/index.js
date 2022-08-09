const app = require('express')()
const userRoute = require('./user/index')
const adminRoutes = require("./admin/index")
const auth = require('./auth')

app.use("/api/v1/auth/" , auth)
app.use("/api/v1/admin", adminRoutes)
app.use("/api/v1/user", userRoute)

module.exports = app