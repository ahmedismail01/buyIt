const app = require('express').Router()
const controller = require('../../controller/admin/category')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }) 


app.get('/',controller.listCategories)
app.get('/:categoryId' , controller.getCategory)
app.post('/' ,upload.array("photos" , 12), controller.createCategory)
app.delete('/:categoryId' , controller.removeCategory)
app.put('/:categoryId' , controller.updateCategory)

module.exports = app
