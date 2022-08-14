const {get , remove , update,create} = require('../../modules/order/repo')
const cart = require('../../modules/cart/repo')


const getOrder = async  (req, res) => {
    res.json(await get({userId : req.session.user._id}))
}

const removeOrder = async (req,res) => {
    const order = get({userId : req.session.user._id})
    const message = await remove(order._id)
    res.json(message)
}

const updateOrder = async (req,res) => {
    const order = get({userId : req.session.user._id})
    res.json(await update(order._id , req.body))
}

const createOrder = async (req,res) => {
    const user = req.session.user._id
    const cartObject = await cart.get({userId : user})
    const shippingFees = cartObject.totalPrice * 0.1
    if (cartObject.items[0]) {
        const form = {
            userId : cartObject.userId,
            items : cartObject.items,
            shippingFees : shippingFees,
            shippingAddress : req.session.user.address,
            totalPrice : cartObject.totalPrice + shippingFees
        }
        await create(form)
        await cart.flush(user)
        res.json({success : true})
    }else{
        res.json({message : "this cart is empty"})
    }
}

module.exports = {
    getOrder,
    removeOrder,
    updateOrder,
    createOrder
}