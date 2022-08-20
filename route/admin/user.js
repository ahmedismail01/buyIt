const app = require('express').Router()
const userController = require('../../controller/admin/user')
const {checkRole} = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')
 
app.get("/getAllUsers" ,checkRole(endPoints.GET_ALL_USERS),userController.getAllUsers)
app.get("/getUser/:userId" ,checkRole(endPoints.GET_USER_BY_ID),userController.getUser)
app.delete("/:userId" ,checkRole(endPoints.DELETE_USER_BY_ID), userController.removeUser)

module.exports = app