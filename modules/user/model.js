const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const saltrounds = 5;
const userSchema = mongoose.Schema({
    name : {type : String , required : true}, // required
    phone : {type : String , required : true},
    password : {type : String , required : true},
    email : {type : String , required : true},
    address : {type : String ,required : false},
    isActive : {type : Boolean  , require : true , default : false},
    wishlist : [{ 
        type : mongoose.Types.ObjectId,
        ref : "product"
    }],
    role : {
        type: String,
        enum : ["superAdmin","admin","premuimUser" , "user", "deliveryAgent"],
        default: "user"
    },
    creditCards : [{
        creditCardNo : {type: String , required : true},
        creditCardEXPdate : {type : Date , required : true },
        creditCardID : {type : String , required : true},
        creditCardPin : {type : String , required : true}
    }]
})
userSchema.pre("save" , async function(next) {
    this.password = await bcrypt.hash(this.password , saltrounds)
    next();
})

const userModel = mongoose.model( "user" , userSchema)
module.exports = userModel

