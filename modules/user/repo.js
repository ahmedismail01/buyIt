const User = require('./model')
const bcrypt = require('bcrypt')
const { query } = require('express')
const hour = 3500000

const isExists = async (query) => {
    const object = await User.findOne(query)
    if (object) return {
        success : true ,
        body : object
    }
    return false 
}
const isCreditcardInArray = async (userId,query) => {
    const object = await User.findOne({
        _id : userId,
        "creditCards" : {$elemMatch:query}
    })
    if(object ) {
    return {
        success : true,
        body : object
    }}else {
        return false
    }
}

const list = async (query) => {
    if (query) return await User.find(query)
    else return await User.find({})
}
const get = async (query) => {
    if (query) return await User.findOne(query)
    else return { message : "you have to send a query" }
}
const create = async (form) =>{ 
    const email = await isExists({email : form.email})
    if (email) return false
    else {const user = await  new User(form)
    await user.save()
    return {
        success : true ,
        user : user
    }}
}
const remove = async (id) =>{
    const isexists = await isExists({_id , id})
    if (isexists) {
        await User.findByIdAndDelete({_id : id})
        return { message : "user deleted"}
    }else{
        return {
            message : "this user doesnt exists"
        }
    }
}
const update = async ( id,form) => { 
    const isUserExists = await isExists({_id : id})
    if (isUserExists) {
        const user = await User.findByIdAndUpdate({_id : id} , form)
        return {
                success : true ,
                user : user 
            } 
    }else {
        return {success : false ,
                message : "user not found"}
    }
}
const comparePassword = async (email , password) => {
    const user = await isExists({email : email})
    
    if (user) {
        const isMatched = await bcrypt.compare(password, user.body.password)
        if (isMatched) {
            return {
                    success : true,
                    message : "you have logged in",
                    user : user
                }

        }else {
            return {success : false ,
                    message : "wrong password"
                }
        }
    }else{
        return {
            success : false,
            message : "you have to register first"
        }
    }
}


const addCreditCard = async (card , id) => {    
    const isUserExists = await isExists({_Id : id})
    const creditExists = await isCreditcardInArray( id ,{creditCardNo : card.creditCardNo })
    if(isUserExists){
        if (creditExists) {
            return {message : "this creditcard already exists"}
        }else{
            await User.findByIdAndUpdate({ _id : id} ,{$push : {creditCards : card}})
            return {
                message : "done",
            }
        }
    }else{
        return {
            success : false ,
            message : "user doesnt exists"
        }
    }
}
const deleteCreditCard = async (userId , creditCardId) => {
    const isUserExists = await isExists({_Id : userId})
    const creditExists = await isExists({_id : userId , creditCards :{$elemMatch:{_id :creditCardId}}})
    if(isUserExists){
        if (creditExists) {
            await User.findByIdAndUpdate({ _id : userId} ,{$pull : {creditCards : {_id : creditCardId}}})
            return {
                message : "deleted",
            }
        }else{
            return {
                message : "cant find this creditCard"
            }
        }
    }else{
        return {
            success : false ,
            message : "user doesnt exists"
        }
    }
}

const addToWishlist = async (userId,productId) =>{
    const isUserExists = await isExists({_Id : userId})
    const query = {wishlist : productId }
    const productExists = await isExists({_id : userId , wishlist : productId})
    if (isUserExists) {
            if (productExists) return {message : "this product already exists in the wishlist"} 
        else 
        {
                await User.findByIdAndUpdate({_id : userId}, {$push : query})
                return {
                    message : "done"
                }
            }
    }else {
        return {message : "user doesnt exists"}
    }
}
const deleteFromWishlist = async (userId , productId) => {
    const isUserExists = await isExists({_Id : userId})
    const query = {wishlist : productId }
    const productExists = await isExists({_id : userId , wishlist : productId})
    if (isUserExists) {
            if (productExists) {
                await User.findByIdAndUpdate({_id : userId}, {$pull : query})
                return {
                    message : "done"
                }
            } 
        else 
            {
               return {message : "product not found in this wishlist"} 
            }
    }else {
        return {message : "user doesnt exists"}
    }
}





module.exports = {
    list,
    create,
    remove,
    update,
    get,
    comparePassword,
    addCreditCard,
    addToWishlist,
    deleteFromWishlist,
    deleteCreditCard,
    // signOut,
    // activation
}