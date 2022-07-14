require("dotenv").config();
const express = require('express')
const app = express()

const route = require("./route/user.route")
const User = require("./modules/user.module")
const connection = require("./connection/dbConnection")
connection()


app.use(express.json())
app.use(route)


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})