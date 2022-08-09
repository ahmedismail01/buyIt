const app = require('express').Router()
const userController = require('../../controller/user/user')
const checkAuth = require('../../utils/checkAuth')
const validator = require('../../utils/common.validate')
const {register,login} = require('../../helpers/userValidation')

 
app.get("/getAllUsers" ,checkAuth,userController.getAllUsers)
app.get("/getUser/:userId" , checkAuth,userController.getUser)
app.post("/update/:userId" , checkAuth,userController.updateUser)
app.post("/addCreditCard" , checkAuth,userController.addCreditCard)
app.get("/getUserWishlist/:userId" ,checkAuth, userController.getUserWishlist)
app.get("/getUserCreditCards/:userId" ,checkAuth ,userController.getCreditCards)
app.post("/deleteCreditcard/:creditId" , checkAuth , userController.deleteCreditcard)
app.post("/deleteProduct/:productId" , checkAuth , userController.deleteProdcut)
app.post("/addProduct/:productId" , checkAuth , userController.addProduct)
app.delete("/:userId" , checkAuth , userController.removeUser)

module.exports = app