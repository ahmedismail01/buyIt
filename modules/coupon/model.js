const mongoose = require("mongoose")

const couponSchema = mongoose.Schema({
    code : String,
    quantity : {type : Number , required : true},
    discount : {type : Number , required : true}
})

module.exports = couponModel = mongoose.model("coupon" , couponSchema)