const app = require('express').Router()
const userController = require('../../controller/user')
const checkAuth = require('../../utils/checkAuth')
const validator = require('../../utils/common.validate')
const {register,login} = require('../../helpers/userValidation')

 
app.get("/getAllUsers" ,checkAuth,userController.getAllUsers)
app.get("/getUser/:userId" , checkAuth,userController.getUser)
app.post("/register" ,validator(register), userController.register)
app.post("/update/:userId" , checkAuth,userController.updateUser)
app.post("/login",validator(login) ,userController.login)
app.post("/addCreditCard" , checkAuth,userController.addCreditCard)
app.get("/getUserWishlist/:userId" ,checkAuth, userController.getUserWishlist)
app.get("/getUserCreditCards/:userId" ,checkAuth ,userController.getCreditCards)
app.post("/signOut" ,checkAuth, userController.signOut)
app.post("/deleteCreditcard/:creditId" , checkAuth , userController.deleteCreditcard)
app.post("/deleteProduct/:productId" , checkAuth , userController.deleteProdcut)
app.post("/addProduct/:productId" , checkAuth , userController.addProduct)
app.post("/activation/:token" , checkAuth , userController.activation)
app.delete("/:userId" , checkAuth , userController.removeUser)

module.exports = app