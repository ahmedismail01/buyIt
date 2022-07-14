const app = require('express').Router()
const userController = require('../controller/user.controller')

app.get("/getAllUsers" , userController.getAllUsers)
app.get("/getUser/:userId" , userController.getUser)
app.post("/register" , userController.register)
app.post("/")

 
module.exports = app