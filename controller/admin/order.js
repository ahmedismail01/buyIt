const {get , list , create , remove , update} = require('../../modules/order/repo')
const cart = require('../../modules/cart/repo')

const listOrders = async (req,res) => {
    res.json(await list())
}

const getOrder = async  (req, res) => {
    res.json(await get({_id : req.params.orderId}))
}

const setDeliveryEgent = async(req,res) => {
    res.json(await update(req.params.orderId , {deliveryEgent : req.body,status : "assigned"}))
}
 


module.exports = {
    getOrder,
    listOrders,
    setDeliveryEgent
}