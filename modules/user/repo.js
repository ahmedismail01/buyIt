const User = require('./model')
const bcrypt = require('bcrypt')
const hour = 3500000

const list = () => {
    return User.find({})
}
const find = (id) => {
    return User.findOne({ _id : id })
}
const add = async (request) =>{
    const emailExists = await User.findOne({ email : request.email})
    if (emailExists) return { message : "email is already exists"} 
    const user = new User({
        name : request.name,
        password : request.password,
        email : request.email,
        address : request.password,
        creditCards : request.creditCards,
        phone : request.phone
    })
    user.save()
    return user
}
const remove = (id) =>{
    return user = User.findByIdAndDelete({_id : id})
}
const update = async (req) => {
    const id = req.params.userId
    const {name , phone , address , password , email} = req.body
    const user = await User.findByIdAndUpdate({_id : id}, {name ,phone , address , password , email})
    return user
}
const login = async (req) => {
    const {email , password} = req.body
    const user = await User.findOne({email : email})
    const isMatched = await bcrypt.compare(password, user.password)
    if (user) {
        if (isMatched) {
            req.session.cookie.expires = new Date(Date.now() + hour)
            req.session.user = user
            await req.session.save()
            return {
                "message" : "you have logged in",
            }
        }else {
            return {
                "message" : "wrong password",
            }
        }
    }else{
        return {
            "message" : "you have to register first"
        }
    }
}

const getWishlist = async (req) => {
    const user = await User.findById({ _id : req.session.user._id})
    const wishList = await user.wishlist
    
    return {
        wishlist : wishList
    }
}
const addCreditCard = async (req) => {
    const userId = req.session.user._id
    const creditCard = req.body
    const user = await User.findByIdAndUpdate({ _id : userId} ,{$push : {creditCards : creditCard}})
    return {
        message : "done",
    }
}
const getCreditCards = async (req) => {
    const user = await User.findById({ _id : req.session.user._id})
    return {
        creditCards : user.creditCards
    }
}
const addToWishlist = async (userId,productId) =>{
    await User.findByIdAndUpdate({_id : userId}, {$push : { wishlist : productId }})
    return {
        message : "done"
    }
}
const deleteCreditCard = async (userId , creditCardId) => {
    await User.findByIdAndUpdate({ _id : userId} , {$pull : {creditCards : { _id : creditCardId}}}) 
    return {
        message : "done"
    }
}

const deleteProductFromWishlist = async (userId , productId) => {
    const user = await User.findByIdAndUpdate({ _id : userId} , {$pull : {wishlist : productId}}) 
    return {
        message : "done"
    }
}
const signOut = async (req) => {
    if (req.session)
        req.session.destroy();
    return {
        status : 201,
        message : 'done'
    }
}

const activation = async (req) => {
    if (req.params.token == req.session.user.token){
        console.log(req.session.user._id)
        await User.findByIdAndUpdate({_id : req.session.user._id} , {isActive : true})
        return {
            message : "you have activated your account"
        }
    } 
    console.log(req.session.user._id)
        await User.findByIdAndUpdate({_id : req.session.user._id} , {isActive : true})
        return {
            message : "you have activated your account"
        }
}

// activation

module.exports = {
    list,
    add,
    remove,
    update,
    find,
    login,
    getWishlist,
    addCreditCard,
    getCreditCards,
    addToWishlist,
    deleteProductFromWishlist,
    deleteCreditCard,
    signOut,
    activation
}