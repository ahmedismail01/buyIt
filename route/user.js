const app = require('express').Router()
const userController = require('../controller/user')
const checkAuth = require('../utils/checkAuth')
const validator = require('../utils/common.validate')
const {confirmUserSchema} = require('../modules/user/helpers/validation')
const {loginSchema } = require('../modules/user/helpers/login.validation')
 
app.get("/getAllUsers" ,checkAuth,userController.getAllUsers)
app.get("/getUser/:userId" , checkAuth,userController.getUser)
app.post("/register" ,validator(confirmUserSchema), userController.register)
app.post("/update/:userId" , checkAuth,userController.updateUser)
app.post("/login",validator(loginSchema) ,userController.login)
app.post("/addCreditCard" , checkAuth,userController.addCreditCard)
app.get("/getUserWishlist/:userId" ,checkAuth, userController.getUserWishlist)
app.get("/getUserCreditCards" ,checkAuth ,userController.getCreditCards)
app.post("/signOut" ,checkAuth, userController.signOut)
app.post("/deleteCreditcard/:creditId" , checkAuth , userController.deleteCreditcard)
app.post("/deleteProduct/:productId" , checkAuth , userController.deleteProdcut)
app.post("/addProduct/:productId" , checkAuth , userController.addProduct)
app.post("/activation/:token" , checkAuth , userController.activation)

module.exports = app