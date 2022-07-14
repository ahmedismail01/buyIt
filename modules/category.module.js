const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name : String,
    description : String,
    photos : [{
        path : String,
    }]
})

module.exports.categoryModel = mongoose.model("category" , categorySchema)