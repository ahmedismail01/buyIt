const {get , list, remove , update} = require('../../modules/order/repo')
const cart = require('../../modules/cart/repo')


const listOrders = async  (req, res) => {
    res.json(await list({deliveryEgent : req.session.user._id}))
}
const getOrder = async(req,res) => {
    res.json(await get({deliveryEgent : req.session.user._id ,_id :req.params.orderId }))
}

const updateOrder = async (req,res) => {
    const order = get({userId : req.session.user._id})
    res.json(await update(order._id , req.body))
}



module.exports = {
    listOrders,
    getOrder,
    updateOrder,
}