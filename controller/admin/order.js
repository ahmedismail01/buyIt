const {get , list , create , remove , update} = require('../../modules/order/repo')
const cart = require('../../modules/cart/repo')

const listOrders = async (req,res) => {
    res.json(await list())
}

const getOrder = async  (req, res) => {
    res.json(await get({_id : req.params.orderId}))
}

const setDeliveryEgent = async(req,res) => {
    const order = get({_id : req.params.orderId})
    if(order.status == "pending"){
        res.json(await update(req.params.orderId , {shippingAgent : req.body.deliveryEgent,status : "assigned"}))
    }else{
        res.json({
                success : false , 
                message : "there is already a shipping egent for this order"
            })
    }
    
}
 


module.exports = {
    getOrder,
    listOrders,
    setDeliveryEgent
}