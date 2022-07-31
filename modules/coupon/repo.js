const Coupon = require('./model')

const isExists = async (query) => {
    const exists = await Coupon.findOne(query)
    if (exists) return true
    return false
}

const list = async (query) => {
    if (query) return await Coupon.find(query)
    else return await Coupon.find({})
}

const get = async (query) => {
    if (query) return await Coupon.findOne(query)
    else return { message : "send a query"}
}

const create = async (form) => {
    const order = await new Order(form)
    order.save()
    return {success : true}   
}

const remove = async (couponId) => {
    if(await isExists({_id : couponId})){
        await Coupon.findByIdAndDelete({_id : couponId})
        return {success : true}
    }else {
        return {message : "coupon not fount"}
    }
}

