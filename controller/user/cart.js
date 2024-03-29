const {get ,addCoupon  , update, addItem, removeItem, flush} = require('../../modules/cart/repo')


const getCart = async (req,res) => {
    
    res.json(await get({userId :req.session.user._id}))
}


const updateCart = async (req,res) => {
    const userId = req.session.user._id
    res.json(await update(userId,req.body))
}

const addItemInCart = async (req,res) => {
    const userId = req.session.user._id
    const productId = req.body.productId
    const quantity = req.body.quantity
    res.json(await addItem(userId , productId , quantity))
}
const removeItemFromCart = async (req,res) => {
    const userId = req.session.user._id
    const productId = req.body.productId
    const quantity = req.body.quantity
    res.json(await removeItem(userId , productId , quantity))
}

const flushCart = async (req,res) => {
    res.json(await flush(req.session.user._id))
}

const couponCode = async (req,res) => {
    const userId = req.session.user._id
    const {coupon} = req.body
    res.json(await addCoupon(coupon , userId))
}


module.exports = {
    getCart,
    updateCart,
    addItemInCart,
    removeItemFromCart,
    flushCart,
    couponCode
}