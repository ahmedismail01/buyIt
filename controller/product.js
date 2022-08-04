const {list , get , create , remove,update} = require('../modules/product/repo')



const listProdcuts = async (req,res) => {
    const products = await list()
    res.status(201).json({message : "success", products})
}



const updateProduct = async (req,res) => {
    const product = await update(req.params.productId , req.body)
    res.json(product)
}


const getProduct = async  (req,res) => {
    const product = await get({_id : req.params.productId})
    if (product) res.json({message : "success" , product})
    else res.json({message : "not found"})
}

const deleteProduct = async (req,res) => {
    const messages = await remove(req.params.productId)
    res.json({messages})
}
const addProduct = async (req,res) => {
    const form = {
        name : req.body.name,
        sellerId : req.body.sellerId,
        price : req.body.price,
        colors : req.body.colors,
        photos : req.files,
        discount : req.body.discount,
        quantity : req.body.quantity,
        category : req.body.category
    }
    const messages = await create(form)
    res.json(messages)
}



module.exports = {
    listProdcuts,
    getProduct,
    updateProduct,
    deleteProduct,
    addProduct
}