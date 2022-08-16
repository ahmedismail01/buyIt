const app = require('express').Router()
const controller = require('../../controller/user/category')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }) 
const checkRole = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')

app.get('/',checkRole(endPoints.GET_ALL_CATEGORIES),controller.listCategories)
app.get('/:categoryId' ,checkRole(endPoints.GET_CATEGORY), controller.getCategory)

module.exports = app
