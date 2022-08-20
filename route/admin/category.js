const app = require('express').Router()
const controller = require('../../controller/admin/category')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }) 
const {checkRole} = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')

app.get('/',checkRole(endPoints.GET_ALL_CATEGORIES),controller.listCategories)
app.get('/:categoryId' ,checkRole(endPoints.GET_CATEGORY), controller.getCategory)
app.post('/' ,[upload.array("photos" , 12),checkRole(endPoints.ADD_CATEGORY)], controller.createCategory)
app.delete('/:categoryId' ,checkRole(endPoints.DELETE_CATEGORY), controller.removeCategory)
app.put('/:categoryId',checkRole(endPoints.UPDATE_CATEGORY) , controller.updateCategory)

module.exports = app
