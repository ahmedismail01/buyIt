const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : {type : String , required : true},
    sellerId : {
        type : mongoose.Types.ObjectId,
        ref : "users",
        required : true
    },
    price : {type : Number , required : true},
    photos : [{
        path : String,
    }],
    colors : [{
        type :String,
        required : false
    }],
    weight : {type : String , required : false},
    quantity : {type : Number , required : true},
    categories : [{
        type : mongoose.Types.ObjectId,
        ref : "categorys",
        required : true
    }],
})

module.exports = productModel = mongoose.model("product" , productSchema)