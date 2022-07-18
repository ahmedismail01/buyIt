const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name : {type : String , required : true},
    description : {type : String , required : true},
    photos : [{
        path : String,
    }]
})

module.exports = categoryModel = mongoose.model("category" , categorySchema)