const app = require('express').Router()
const controller = require('../controller/auth/auth')
const {login,register} =require('../helpers/userValidation')
const validator = require('../utils/common.validate')

app.post('/login' ,validator(login), controller.login)
app.post('/register' ,validator(register), controller.register)
app.post('/activation/:token' , controller.activation)
app.post('/signOut' , controller.signOut)

module.exports = app