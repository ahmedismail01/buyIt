const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name : {type : String , required : true}, // required
    phone : {type : String , required : true},
    password : {type : String , required : true},
    email : {type : String , required : true},
    address : {type : String },
    isActive : {type : Boolean },
    whishlist : [{ 
        type : mongoose.Types.ObjectId,
        ref : "product"
    }],
    role : {
        type: String,
        enum : ["superAdmin","admin","premuimUser" , "user", "deliveryAgent"],
        default: "user"
    },
    creditCards : [{
        creditCardNo : {type: String},
        creditCardEXPdate : {type : Date},
        creditCardID : {type : String},
        creditCardPin : {type : String}
    }]
})


module.exports.userModel = mongoose.model( "User" , userSchema)

