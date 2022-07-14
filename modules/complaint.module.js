const mongoose = require('mongoose')
// xx
const complaintSchema = mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        ref : "users"
    },
    product : {
        type : mongoose.Types.ObjectId,
        ref : "products"
    },
    reason : String,
    date : Date,

})
module.exports.compaintModel = mongoose.model("compalint" , complaintSchema)