const {create , list , get , remove , update} = require('../../modules/coupon/repo')


const createCoupon = async (req,res) => {
    res.json(await create(req.body))
}

const listCoupons = async (req,res) => {
    res.json(await list())
}

const getCoupon = async (req,res) => {
    const object = await get({_id : req.params.couponId})
    if (object) res.json(object)
    res.json({message : "not found"})
}

const removeCoupon = async (req,res) => {
    res.json(await remove(req.params.couponId))
}

const updateCoupon = async (req,res) => {
    const couponId = req.params.couponId
    const form = req.body
    res.json(await update(couponId,form))
}


module.exports = {
    createCoupon,
    listCoupons,
    getCoupon,
    removeCoupon,
    updateCoupon
}