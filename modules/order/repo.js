const Order = require('./model')

const create = async (form) => {
    const object = await new Order(form)
    object.save()
    return { success : true}
}
const list = async (query) => {
    if(query) return Order.find(query)
    else return Order.find({})
}

const get = async (query) => {
    if(query) return await Order.findOne(query)
    else return {message : "pls send a query"}
}

const remove = async (id) => {
    if (await isExists({_id : id})) {
        await Order.findByIdAndDelete({_id : id})
        return {success : true}
    }else {
        return {success : false , message : "order not found"}
    }
}
const update = async (id,form) => {
    if (await isExists({_id : id})) {
        await Order.findByIdAndUpdate({_id : id}, form)
        return {success : true}
    }else {
        return {success : false , message : "order not found"}
    }
}


const isExists = async (query) => {
    const object = await get(query)
    if (object) {
        return {
            success : true ,
            record : object,
            code : 200
        }
    }else {
        return {
            success : false ,
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