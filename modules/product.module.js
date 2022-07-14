const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : String,
    sellerId : {
        type : mongoose.Types.ObjectId,
        ref : "users"
    },
    price : Number,
    photos : [{
        path : String,
    }],
    color : String,
    weight : Number,
    discount : Number,
    quantity : Number,
    categories : [{
        type : mongoose.Types.ObjectId,
        ref : "categorys"
    }],
})

module.exports.productModel = mongoose.model("product" , productSchema)