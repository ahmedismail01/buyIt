const app = require('express').Router()
const userController = require('../../controller/admin/user')
const checkAuth = require('../../utils/checkAuth')
const validator = require('../../utils/common.validate')
const {register,login} = require('../../helpers/userValidation')

 
app.get("/getAllUsers" ,checkAuth,userController.getAllUsers)
app.get("/getUser/:userId" , checkAuth,userController.getUser)
app.delete("/:userId" , checkAuth , userController.removeUser)

module.exports = app