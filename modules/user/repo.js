const User = require('./model')

const list = () => {
    return User.find({})
}
const find = (id) => {
    return User.find({ _id : id })
}
const add = (request) =>{
    const user = new User(request)
    user.save()
    return {
        message: "done"
    }
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
    if (user) {
        if (user.password == password) {
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

const getWishlist = async (userId) => {
    const user = await User.findById({ _id : userId})
    const wishList = user.wishList
    return {
        wishList : wishList
    }
}
const addCreditCard = async (req) => {
    const userId = req.params.userId
    const creditCard = req.body
    const user = await User.findByIdAndUpdate({ _id : userId} ,{$push : {creditCards : creditCard}})
    return {
        message : "done",
        theNewCreditcard : user.creditCards
    }
}
const getCreditCards = async (req) => {
    const user = await User.findById({ _id : req.params.userId})
    return {
        creditCards : user.creditCards
    }
}


module.exports = {
    list,
    add,
    remove,
    update,
    find,
    login,
    getWishlist,
    addCreditCard,
    getCreditCards
}