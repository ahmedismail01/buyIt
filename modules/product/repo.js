const Product = require('./model')
const list = ( ) => {
    return Product.find({})
}
const find = (id) => {
    return Product.findOne({ _id : id })
}
const add = (req) =>{
    console.log(req)
    const product = new Product({
        name : req.body.name,
        sellerId : req.body.sellerId,
        price : req.body.price,
        color : req.body.color,
        photos : req.files,
        discount : req.body.discount,
        quantity : req.body.quantity,
        categories : req.body.categories
    })
    product.save()
    return {
        message : 'done'
    }
}
const remove = async (id) =>{
    const product = await Product.findByIdAndDelete({_id : id})
    return {
        message : "deleted",
        product : product
    }
}
const update = async (req) => {
    const id = req.params.productId
    const {name , price , color, weight , quantity ,discount , category} = req.body
    const product = await Product.findByIdAndUpdate({_id : id}, {name ,category , discount , quantity , weight , color,price})
    return product
}

module.exports = {
    list,
    find,
    add,
    remove,
    update
}