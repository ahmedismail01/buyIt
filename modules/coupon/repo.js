const Coupon = require('./model')

const list = async (query) => {
    if (query) return await Coupon.find(query)
    else return await Coupon.find({})
}

const get = async (query) => {
    if (query) return await Coupon.findOne(query)
    else return { message : "send a query"}
}

const create = async (form) => {
    const coupon = await new Coupon(form)
    coupon.save()
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

const update = async (couponId , form) => {
    const coupon = await isExists({_id : couponId})
    if(coupon.success) {
        await Coupon.findByIdAndUpdate({_id : couponId} , form)
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
    const exists = await Coupon.findOne(query)
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

