const Cart = require('./model')
const product = require("../product/repo")




// const create = async (form) => {

//     const products = form.items
//     orderTotalPrice = 0
//     itemsLength = products.length
//     for (let i = 0 ; i < itemsLength ; i++){
//         const productObject = await product.get({_id : form.items[i].product})
//         form.items[i].price = productObject.price - (productObject.price / productObject.discount)  
//         if (form.items[i].quantity <= productObject.quantity){
//             product.update(form.items[i].product , {quantity : productObject.quantity - form.items[i].quantity})
//         }else{
//             return {message : `product ${form.items[i].product} quantity is less than the quantity you ask for`}   
//         }
//         form.items[i].total = form.items[i].price * form.items[i].quantity
//         orderTotalPrice = orderTotalPrice + form.items[i].total
//     } 
//     
//     totalPrice = await calculateTotal(form)
//     form.totalPrice = totalPrice
//     const cart = await new Cart(form)
//     await cart.save()
//     return {success : true}
// }

const list = async (query) => {
    if(query)return await Order.find(query)
    return await Order.find({})
}

const get = async (query) => {
    if(query) return await Cart.findOne(query)
    return {message : "send a query"}
}

const update = async (userId,form) => {
    if (await isExists({userId : userId})){
        await Cart.updateOne({userId : userId } ,form)
        return {
            success : true,
        }
    }else {
        return {
            success : false ,
            message : "cart doesnt exists"
        }
    }
}

const remove = async (cart) => {
    if (await isExists({userId : cart})){
        await Cart.findByIdAndDelete({userId : cart })
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
const addItem = async (cart , productId , quantity) => {
    const isCartExists = await isExists({userId : cart})
    const productObject = await product.get({_id : productId})
    if (isCartExists.success) {
        const isProductInCart = await isItemInCart(isCartExists.record , productId)
            if (productObject.quantity >= quantity){
                if(isProductInCart.success){
                    newQuantity = isProductInCart.record.quantity + quantity
                    newProductTotal = isProductInCart.record.price * newQuantity
                    await Cart.updateOne({userId : cart , "items.product" : productId} , {$set : {"items.$.quantity" : newQuantity , "items.$.total" : newProductTotal}})
                    await product.update(productId , {quantity : productObject.quantity - quantity})
                    newCart = await get({userId : cart})
                    totalPrice = await calculateTotal(newCart)
                    await Cart.updateOne({userId : cart} ,{totalPrice : totalPrice})
                    return {success : true}
                }else{
                    productTotal = productObject.price * quantity
                    const newProduct = {
                        product : productId,
                        price : productObject.price,
                        quantity : quantity,
                        total : productTotal
                    }
                    await Cart.updateOne({userId : cart} , {$push : {items : newProduct}})
                    await product.update(productId , {quantity : productObject.quantity - quantity})
                    newCart = await get({userId : cart})
                    totalPrice = await calculateTotal(newCart)
                    await Cart.updateOne({userId : cart} ,{totalPrice : totalPrice})
                    return {success : true}
                }
            }else {
                return {success : false , message : `there is only ${productObject.quantity} of this product`}
            }
    }
}

const removeItem = async (cart , productId , quantity) => {
    const isCartExists = await isExists({userId : cart})
    const productObject = await product.get({_id : productId})
    if (isCartExists.record) {
        const isProductInCart = await isItemInCart(isCartExists.record , productId)
        if(isProductInCart.success) {
            const cartProduct = isProductInCart.record
            if(quantity >= cartProduct.quantity){ 
                await Cart.updateOne({userId : cart} , {$pull : {items : {product : productId}}})
                await product.update(productId , {quantity : productObject.quantity + quantity})
                newCart = await get({userId : cart})
                totalPrice = await calculateTotal(newCart)
                await Cart.updateOne({userId : cart} ,{totalPrice : totalPrice})
                return {success : true}
            }else{
                await Cart.updateOne({userId : cart , items : {product : productId}} , {quantity : cartProduct.quantity - quantity})
                await product.update(productId , {quantity : productObject.quantity + quantity})
                newCart = await get({userId : cart})
                totalPrice = await calculateTotal(newCart)
                await Cart.updateOne({userId : cart} ,{totalPrice : totalPrice})
                return {success : true}
            }
        }else {
            return {success : false , message : "product not found"}
        }
    }else{
        return {success : false , message : "cart is empty"}
    }
}


const calculateTotal = async (cart) => {
    const items = cart.items
    totalPrice = 0
    for (let i = 0; i < items.length ; i++){
        totalPrice += items[i].total
    }
    return totalPrice
}
const flush = async (userId) => { 
    const cartExists = await isExists({userId : userId})
    if (cartExists) {
        await Cart.updateOne({userId : userId} , {$pull : {items : {}} , totalPrice : 0})
        return {success : true}
    }
}




const isExists = async (filter) => {
    const cart = await Cart.findOne(filter);
    if(cart) {
        return {
            success: true,
            record: cart,
            code: 200
        };
    }
    else {
        const cart = new Cart({ userId: filter.userId, totalPrice: 0})
        await cart.save();
        return {
            success: true,
            code: 200
        };
    }
}

const isItemInCart = async (cart, product) => {
    const items = cart.items
    if(cart.items == 0) return {success : false}
    for (let i = 0 ; i < items.length ; i++) {
        if (items[i].product.toString() === product) {
            return {
                success: true,
                record: items[i],
                index : i,
                code: 200
            };
        }else{
            return { success : false }
        }
    }
}

module.exports = {
    // create,
    list,
    get,
    update,
    remove,
    addItem,
    removeItem,
    flush
}