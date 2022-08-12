const {get , list, create , remove , update, addItem, removeItem, flush} = require('../../modules/cart/repo')
const order = require("../../modules/order/repo")


const listCarts = async (req,res) => {
    res.json(await list())
}

const getCart = async (req,res) => {
    res.json(await get({_id :req.params.orderId}))
}

const setStatus = async (req,res) => {
    res.json(await update(req.params.orderId, req.body))
}

const setShippingAgent = async (req,res) => {
    res.json(await update(req.params.orderId , req.body))
}



module.exports = {
    listCarts,
    getCart,
    setStatus,
    setShippingAgent,
}