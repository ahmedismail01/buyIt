const mongoose = require('mongoose')


const categorySchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    items: [
        {
            product: { type: mongoose.SchemaTypes.ObjectId, ref: "products" },
            price: Number,
            quantity: Number,
            total: Number,
        },
    ],
    coupon : {
        type :mongoose.Types.ObjectId, 
        ref : "coupon"
    },
    discount: Number,
    totalPrice: Number,
})


module.exports = categorySchema = mongoose.model("category", categorySchema)