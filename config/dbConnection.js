const mongoose = require('mongoose');

const connection = ( ) => {
    return mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology : true})
    .then(( ) => {
        console.log("connection succeded")
    } ).catch((err) => {
        console.log("happend in connection" , err)
    })
}
module.exports = connection