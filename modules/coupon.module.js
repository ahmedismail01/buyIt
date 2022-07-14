const mongoose = require("mongoose")

const couponSchema = mongoose({
    userId :{
        type : mongoose.Types.ObjectId,
        req : "users"
    },
    code : String,
    quantity : Number,
    // discount
})

module.exports.couponModel = mongoose.model("coupon" , couponSchema)