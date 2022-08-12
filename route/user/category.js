const app = require('express').Router()
const controller = require('../../controller/user/category')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }) 


app.get('/',controller.listCategories)
app.get('/:categoryId' , controller.getCategory)

module.exports = app
