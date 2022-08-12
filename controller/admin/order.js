const {get , list , create , remove , update} = require('../../modules/order/repo')
const cart = require('../../modules/cart/repo')

const listOrders = async (req,res) => {
    res.json(await list())
}

const getOrder = async  (req, res) => {
    res.json(await get({_id : req.params.orderId}))
}

const setOrderStatus = async (req,res) => {
    if (req.body.status == "assigned"){
        res.json(await update(req.params.orderId ,{status : "assigned"}))
    }else{
        res.json({message : "invalid input"})
    }
}



module.exports = {
    getOrder,
    listOrders,
    setOrderStatus,
}