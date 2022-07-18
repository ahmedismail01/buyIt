const app = require('express').Router()

const controller = require('./../../controller/admin')

app.get("/getAllUsers" , controller.getAllUsers)
app.get("/getUser/:userId" , controller.getUser)
app.post("/register" , controller.register)
app.post("/update/:userId" , controller.updateUser)
app.post("/delete/:userId" , controller.deleteUser)
app.post("/login" , controller.login)

module.exports = app