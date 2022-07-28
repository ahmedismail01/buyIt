const {get , list, create , remove , update} = require('../modules/order/repo')



const listOrders = async (req,res) => {
    res.json(await list())
}

const getOrder = async (req,res) => {
    res.json(await get({_id :req.params.orderId}))
}

const createOrder = async (req,res) => {
    res.json(await create(req.body))
}

const updateOrder = async (req,res) => {
    res.json(await update(req.params.orderId,req.body))
}

const deleteOrder = async (req,res) => {
    res.json(await remove(req.params.orderId))
}

const setStatus = async (req,res) => {
    res.json(await update(req.params.orderId, req.body))
}

const setShippingAgent = async (req,res) => {
    res.json(await update(req.params.orderId , req.body))
}

module.exports = {
    createOrder,
    listOrders,
    getOrder,
    updateOrder,
    deleteOrder,
    setStatus,
    setShippingAgent
}