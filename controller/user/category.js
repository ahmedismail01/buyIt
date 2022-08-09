const {get , list , remove , update , create} = require('../../modules/category/repo')


const getCategory = async (req,res) => {
    res.json(await get({_id : req.params.categoryId}))
}

const listCategories = async (req,res) => {
    res.json(await list())
}

const removeCategory = async (req,res) => {
    res.json(await remove(req.params.categoryId))
}

const updateCategory = async (req,res) => {
    const id = req.params.categoryId
    const form = req.body
    res.json(await update(id , form))
}

const createCategory = async (req,res) => {
    const form = {
        name : req.body.name,
        description : req.body.description,
        photos : req.files
    }
    res.json(await create(form))
}

module.exports = {
    listCategories,
    getCategory,
    removeCategory,
    updateCategory,
    createCategory
}
