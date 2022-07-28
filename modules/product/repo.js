const Product = require('./model')






const isExists = async (query) => {
    const object = await Product.findOne(query)
    if (object) return {
        success : true ,
        body : object
    }
    return false 
}



const list = async (query) => {
    if(query) return await Product.find(query)
    return await Product.find({})
}
const get = async (query) => {
   if (query) return Product.findOne(query)
   else return { message : "you have to send query"}
}
const create = (form) =>{
    const product = new Product({
        name : form.body.name,
        sellerId : form.body.sellerId,
        price : form.body.price,
        colors : form.body.colors,
        photos : form.files,
        discount : form.body.discount,
        quantity : form.body.quantity,
        categories : form.body.categories
    })
    product.save()
    return {
        message : 'done'
    }
}
const remove = async (id) =>{
    const productExists = await isExists({_id : id})
    if ( productExists) {
        await Product.findByIdAndDelete({_id : id})
        return {
            message : "deleted",
        }
    }else {
        return {
            message : "product not found"
        }
    }
}
const update = async (productId , form) => {
    const productExists = await isExists({_id : productId})
    if ( productExists) {
        await Product.findByIdAndUpdate({_id : productId} , form)
        return {
            message : "done",
        }
    }else {
        return {
            message : "product not found"
        }
    }
}

module.exports = {
    list,
    get,
    create,
    remove,
    update
}