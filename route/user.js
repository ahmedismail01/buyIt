const app = require('express').Router()
const userController = require('../controller/user')

app.get("/getAllUsers" , userController.getAllUsers)
app.get("/getUser/:userId" , userController.getUser)
app.post("/register" , userController.register)
app.post("/update/:userId" , userController.updateUser)
app.post("/login" , userController.login)
app.post("/addCreditCard/:userId" , userController.addCreditCard)
app.get("/getUserWishlist/:userId" , userController.getUserWishlist)
app.get("/getUserCreditCards/:userId" , userController.getCreditCards)

module.exports = app