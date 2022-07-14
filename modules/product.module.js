const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : {type : String , required : true},
    sellerId : {
        type : mongoose.Types.ObjectId,
        ref : "users"
    },
    price : {type : String , required : true},
    photos : [{
        path : String,
    }],
    color : String,
    weight : Number,
    discount : {type : Number , required : false , default : 0},
    quantity : {type : Number , required : true},
    categories : [{
        type : mongoose.Types.ObjectId,
        ref : "categorys",
        required : true
    }],
})

module.exports.productModel = mongoose.model("product" , productSchema)