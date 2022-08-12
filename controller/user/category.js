const {get , list , remove , update , create} = require('../../modules/category/repo')


const getCategory = async (req,res) => {
    res.json(await get({_id : req.params.categoryId}))
}

const listCategories = async (req,res) => {
    res.json(await list())
}


module.exports = {
    listCategories,
    getCategory,
}
