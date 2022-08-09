const {get , list , create , remove , update} = require('../../modules/order/repo')
const cart = require('../../modules/cart/repo')

const listOrders = async (req,res) => {
    res.json(await list())
}

const getOrder = async  (req, res) => {
    res.json(await get({_id : req.params.orderId}))
}

const removeOrder = async (req,res) => {
    const message = await remove(req.params.orderId)
    res.json(message)
}

const updateOrder = async (req,res) => {
    res.json(await update(req.params.orderId , req.body))
}
const createOrder = async (req,res) => {
    const user = req.session.user._id
    const cart = await cart.get({userId : user})
    if (cart.items[0]) {
        const form = {
            userId : cart.userId,
            items : cart.items,
            shippingFees : cart.totalPrice * 0.1,
            shippingAddress : req.session.user.address,
            totalPrice : cart.totalPrice + shippingFees
        }
        await cart.create(form)
        await cart.flush(user)
        res.json({success : true})
    }else{
        res.json({message : "this cart is empty"})
    }
    
}

module.exports = {
    getOrder,
    listOrders,
    removeOrder,
    updateOrder,
    createOrder
}