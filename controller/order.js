const {get , list , create , remove , update} = require('../modules/order/repo')


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
    res.json(await create(req.body))
}

module.exports = {
    getOrder,
    listOrders,
    removeOrder,
    updateOrder,
    createOrder
}