const {list , find , add , remove,update} = require('../modules/product/repo')



const getAllProdcuts = async (req,res) => {
    const products = await list()
    res.status(201).json({message : "success", products})
}



const updateProduct = async (req,res) => {
    const product = await update(req)
    res.json(product)
}


const getProduct = async  (req,res) => {
    const product = await find(req.params.productId)
    if (product) res.json({message : "success" , product})
    else res.json({message : "not found"})
}

const deleteProduct = async (req,res) => {
    const messages = await remove(req.params.productId)
    res.json({messages})
}
const addProduct = async (req,res) => {
    const messages = await add(req)
    res.json(messages)
}


module.exports = {
    getAllProdcuts,
    getProduct,
    updateProduct,
    deleteProduct,
    addProduct
}