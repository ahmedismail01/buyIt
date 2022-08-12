const app = require('express').Router()
const userController = require('../../controller/user/user')
const checkAuth = require('../../utils/checkAuth')

 
// app.get("/getAllUsers" ,checkAuth,userController.getAllUsers)
app.get("/getUser/" , checkAuth,userController.getUser)
app.post("/update/" , checkAuth,userController.updateUser)
app.post("/addCreditCard" , checkAuth,userController.addCreditCard)
app.get("/getUserWishlist/" ,checkAuth, userController.getUserWishlist)
app.get("/getUserCreditCards/" ,checkAuth ,userController.getCreditCards)
app.post("/deleteCreditcard/:creditId" , checkAuth , userController.deleteCreditcard)
app.post("/deleteProduct/:productId" , checkAuth , userController.deleteProdcut)
app.post("/addProduct/:productId" , checkAuth , userController.addProduct)
app.delete("/" , checkAuth , userController.removeUser)

module.exports = app