const Category = require('./model')

const list = async (query) => {
    if (query) return await Category.find(query)
    else return await Category.find({})
}

const get = async (query) => {
    if (query) return await Category.findOne(query)
    else return { message : "send a query"}
}

const create = async (form) => {
    const category = await new Category(form)
    category.save()
    return {success : true}   
}

const remove = async (categoryId) => {
    if(await isExists({_id : categoryId})){
        await Category.findByIdAndDelete({_id : categoryId})
        return {success : true}
    }else {
        return {message : "category not fount"}
    }
}

const update = async (categoryId , form) => {
    
    const category = await isExists({_id : categoryId})
    if(category.success) {
        await Category.findByIdAndUpdate({_id : categoryId} , form)
        return {
            success : true 
        }
    }else{
        return {
            success : false ,
            message : "coupon not found"
        }
    }
}

const isExists = async (query) => {
    const exists = await Category.findOne(query)
    if (exists) {
        return {
            success : true ,
            record : exists,
            code : 200
        }
    }else{
        return{
            success :true ,
            code : 404
        }
    }
}

module.exports = {
    create,
    list,
    get,
    remove,
    update
}
