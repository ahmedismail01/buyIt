const {get , list, remove , update} = require('../../modules/order/repo')
const cart = require('../../modules/cart/repo')


const listOrders = async  (req, res) => {
    res.json(await list({shippingAgent : req.session.user._id}))
}
const getOrder = async(req,res) => {
    res.json(await get({deliveryEgent : req.session.user._id ,_id :req.params.orderId }))
}

const setOrderStatus = async (req,res) => {
    const order = get({_id : req.params.orderId})
    res.json(await update(order._id , {status : req.body.status}))
}



module.exports = {
    listOrders,
    getOrder,
    setOrderStatus,
}