const mongoose = require("mongoose")

const couponSchema = mongoose.Schema({
    userId :{
        type : mongoose.Types.ObjectId,
        req : "users",
        required : true
    },
    code : String,
    quantity : {type : Number , required : true},
    discount : {type : Number , required : true}
})

module.exports = couponModel = mongoose.model("coupon" , couponSchema)