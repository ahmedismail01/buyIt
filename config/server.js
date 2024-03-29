require("dotenv").config();
const express = require('express')
const app = express()
const sessionAuth = require('../helpers/sessions.auth')
const connection = require("./dbConnection")
const route = require("../route/index")
connection()

app.use(express.json())
app.use(sessionAuth)
app.use(route)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})