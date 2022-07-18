require("dotenv").config();
const express = require('express')
const app = express()
const connection = require("./connection/dbConnection")
connection()

const route = require("./route/index")



app.use(express.json())
app.use(route)


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})