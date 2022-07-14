const mongoose = require("mongoose")


const orderSchema = mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        ref : "users"
    },
    items: [
        {
            product: { type: mongoose.SchemaTypes.ObjectId, ref: "products" },
            price: Number,
            quantity: Number,
            total: Number,
        },
    ],
    // shipping Address
    shippingFees : Number,
    totalPrice : Number,
    shippingAgent : {
        type : mongoose.Types.ObjectId,
        ref : "users"
    },
    deliveryDate : Date,
    orderDate : Date,
    creditCardNo : String,
    status : {
        type : String,
        enum : ["pending" , "assigned" , "deliverd" , "canceled"],
        default :  "pending"
    }
})

module.exports.orderModel = mongoose.model("order" , orderSchema)