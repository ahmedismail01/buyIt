const repo = require("../modules/user/repo")
const hour = 3600000
const {sendMail} = require('../helpers/email')


const getAllUsers = async (req,res) => {
    const users = await repo.list()
    res.status(201).json({message : "success", users : users})
}

const register = async (req,res)=> {
    const message = await repo.create(req.body)
    if (message.success) {
    const theToken = Math.random()*10000
    req.session.user = message.record
    req.session.token = theToken
    req.session.save();
    const email = `http://localhost:8080/api/v1/user/activation/${theToken}`
    const subject = "activate your email"
    const text = "click the link  to activate your email"
    const html = `<a>${email}</a>`
    await sendMail(req.body.email ,subject,text,html)
    res.status(201).json({ message : "activate your email"})
    }else {
        res.json({message : "this email already exists" })
    }
}



const updateUser = async (req,res) => {
    const userId = req.params.userId
    const form = req.body
    const message = await repo.update(userId , form)
    if (message.success) {
        user = message.user
        res.json(user)
    }else {
        res.json(message)
    }
    
}



const login = async (req,res) => {
    const isCorrect = await repo.comparePassword(req.body.email , req.body.password)
    if (isCorrect.success) {
        const user = isCorrect.record
        if(user.isActive) {
            req.session.cookie.expires = new Date(Date.now() + hour)
            req.session.user = user
            await req.session.save()
            res.json({message : "you have logged in"})
        }else{
            res.json({message : "activate your account first"})
        }
    }else {
        res.json({message : isCorrect.message})
    }
    
}

const getUser = async  (req,res) => {
    const user = await repo.get({_id :req.params.userId})
    if (user) res.json({message : "success" , user})
    else res.json({message : "not found"})
}

const getUserWishlist = async (req,res) => {
    const user = await repo.get({ _id : req.params.userId})
    if (user) res.json({message : "success" , wishlist : user.wishlist})
     res.json({message : "not found"})
}
const addCreditCard = async (req,res) => {
    const userId = req.session.user._id
    const card = req.body
    const body = await repo.addCreditCard(card , userId)
    res.json(body)
}

const getCreditCards = async (req,res) => {
    const user = await repo.get({ _id : req.params.userId})
    if (user) res.json({message : "success" , wishlist : user.creditCards})
    res.json({message : "not found"})
}
const addProduct = async (req,res) => {
    const productId = req.params.productId
    const userId = req.session.user._id
    const updatedUser = await repo.addToWishlist(userId,productId)
    res.json({message : updatedUser})
}
const signOut = async (req,res) => {
        if (req.session)
            req.session.destroy();
    res.json({
        status : 201,
        message : 'done'
    })
}
const deleteProdcut = async (req,res) => {
    const productId = req.params.productId
    const userId = req.session.user._id
    const message = await repo.deleteFromWishlist(userId , productId)
    res.json(message)
}

const deleteCreditcard = async (req,res) => {
    const creditId = req.params.creditId
    const userId = req.session.user._id
    const message = await repo.deleteCreditCard(userId , creditId)
    res.json(message)
}
const activation = async (req,res) => {
    if (req.params.token == req.session.token){
        await repo.update(req.session.user._id , {isActive : true})
        res.json({message : "activated"})
    }else{
        res.json({message : "wrong token"})
    }
}
const removeUser = async (req,res) => {
    res.json(await repo.remove(req.params.userId))
}


module.exports = {
    getAllUsers,
    register,
    getUser,
    login,
    updateUser,
    addCreditCard,
    getUserWishlist,
    getCreditCards,
    signOut,
    deleteCreditcard,
    deleteProdcut,
    addProduct,
    activation,
    removeUser
}