const Order = require('./model')
const Product = require("../product/repo")



const isExists = async (query) => {
    const exists = await Order.findOne(query)
    if(exists) return true
    return false
}

const create = async (form) => {
    const products = form.items
    orderTotalPrice = 0
    itemsLength = products.length
    for (let i = 0 ; i < itemsLength ; i++){
        const product = await Product.get({_id : form.items[i].product})
        form.items[i].price = product.price - (product.price / product.discount)  
        if (form.items[i].quantity <= product.quantity){
            Product.update(form.items[i].product , {quantity : product.quantity - form.items[i].quantity})
        }else{
            return {message : `product ${form.items[i].product} quantity is less than the quantity you ask for`}   
        }
        form.items[i].total = form.items[i].price * form.items[i].quantity
        orderTotalPrice = orderTotalPrice + form.items[i].total
    } 
    form.totalPrice = orderTotalPrice
    form.shippingFees = form.totalPrice * (10 /100)
    form.orderDate = new Date()
    form.deliveryDate = new Date()
    form.deliveryDate.setDate(form.orderDate.getDate() + 7)
    const order = await new Order(form)
    await order.save()
    return {success : true}
}

const list = async (query) => {
    if(query)return await Order.find(query)
    return await Order.find({})
}

const get = async (query) => {
    if(query) return await Order.findOne(query)
    return {message : "send a query"}
}

const update = async (orderId,form) => {
    if (await isExists({_id : orderId})){
        await Order.findByIdAndUpdate({_id : orderId } ,form)
        return {
            success : true,
        }
    }else {
        return {
            success : false ,
            message : "order doesnt exists"
        }
    }
}

const remove = async (orderId) => {
    if (await isExists({_id : orderId})){
        await Order.findByIdAndDelete({_id : orderId })
        return {
            success : true,
        }
    }else {
        return {
            success : false ,
            message : "order doesnt exists"
        }
    }
}


module.exports = {
    create,
    list,
    get,
    update,
    remove
}