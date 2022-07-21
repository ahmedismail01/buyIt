const joi = require('joi')

module.exports = {
    loginSchema : {
        body : joi.object().required().keys({
            email : joi.string().email({minDomainSegments : 2,tlds : {allow : ["com","net"]}}).empty().messages({
                "string.email" : "please enter a valid email",
                "string.required" : "please enter your email",
                "string.empty" : "email cannot be empty"
            }),
            password : joi.string().empty().required().messages({
                "string.required" : "please enter your password",
                "string.empty" : "password cannot be empty"
            }),
    })
    }

}