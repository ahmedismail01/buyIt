const {get , list, create , remove , update, addItem, removeItem, flush} = require('../../modules/cart/repo')
const order = require("../../modules/order/repo")


const listCarts = async (req,res) => {
    res.json(await list())
}

const getCart = async (req,res) => {
    res.json(await get({_id :req.params.orderId}))
}



const updateCart = async (req,res) => {
    res.json(await update(req.params.orderId,req.body))
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

const deleteCart = async (req,res) => {
    res.json(await remove(req.params.orderId))
}

const setStatus = async (req,res) => {
    res.json(await update(req.params.orderId, req.body))
}

const setShippingAgent = async (req,res) => {
    res.json(await update(req.params.orderId , req.body))
}

const flushCart = async (req,res) => {
    res.json(await flush(req.session.user._id))
}


module.exports = {
    listCarts,
    getCart,
    updateCart,
    deleteCart,
    setStatus,
    setShippingAgent,
    addItemInCart,
    removeItemFromCart,
    flushCart,
}