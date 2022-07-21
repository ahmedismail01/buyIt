const joi = require('joi')

 module.exports = { 
     confirmUserSchema : {
        body :
            joi.object().required().empty().keys({
                name : joi.string().required().empty().messages({
                    "string.required" : "please enter your name",
                    "string.empty" : "name cannot be empty"
                }),
                phone : joi.string().required().empty().messages({
                    "string.required" : "please enter your phone",
                    "string.empty" : "phone cannot be empty"
                }),
                email : joi.string().email({minDomainSegments : 2,tlds : {allow : ["com","net"]}}).empty().messages({
                    "string.email" : "please enter a valid email",
                    "string.required" : "please enter your email",
                    "string.empty" : "email cannot be empty"
                }),
                password : joi.string().empty().required().pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)).messages({
                    "string.required" : "please enter your password",
                    "string.base" : "please enter a valid password",
                    "string.empty" : "password cannot be empty"
                }),
                confirmPassword: joi.string().required().valid(joi.ref('password')).messages({
                    "string.required" : "please confirm you password",
                    "string.empty" : "confirmPassword cannot be empty",
                }),
                address : joi.string().required().empty().messages({
                    "string.required" : "please enter your address",
                    "string.empty" : "address cannot be empty"
                }),
                creditCards : joi.array().items(joi.object({
                    creditCardNo : joi.string().required().empty().messages({
                        "string.required" : "please enter your creditCardNo",
                        "string.empty" : "creditCardNo cannot be empty"
                    }),
                    creditCardEXPdate : joi.date().required().empty().messages({
                        "string.required" : "please enter your creditCardEXPdate",
                        "string.empty" : "creditCardEXPdate cannot be empty"
                    }),
                    creditCardID : joi.string().required().empty().messages({
                        "string.required" : "please enter your creditCardID",
                        "string.empty" : "creditCardID cannot be empty"
                    }),
                    creditCardPin : joi.string().required().empty().messages({
                        "string.required" : "please enter your creditCardPin",
                        "string.empty" : "creditCardPin cannot be empty"
                    }),
                })),

            })
    }
}