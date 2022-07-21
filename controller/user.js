const repo = require("../modules/user/repo")

const {sendMail} = require('../helpers/email')


const getAllUsers = async (req,res) => {
    const users = await repo.list()

    res.status(201).json({message : "success", users : users})
}

const register = async (req,res)=> {
    const user = await repo.add(req.body)
    const theToken = Math.random()*10000
    req.session.user = user
    req.session.token = theToken
    req.session.save();
    const email = `http://localhost:8080/activation/${theToken}`
    const subject = "activate your email"
    const text = "click the link  to activate your email"
    const html = `<a>${email}</a>`
    await sendMail(req.body.email ,subject,text,html)
    res.status(201).json({ message : "activate your email"})
}



const updateUser = async (req,res) => {
    const user = await repo.update(req)
    res.json(user)
}



const login = async (req,res) => {
    const isValid = await repo.login(req)
    res.json(isValid)
}

const getUser = async  (req,res) => {
    const user = await repo.find(req.params.userId)
    if (user) res.json({message : "success" , user})
    else res.json({message : "not found"})
}

const getUserWishlist = async (req,res) => {
    const message = await repo.getWishlist(req)
    res.json(message)
}
const addCreditCard = async (req,res) => {
    const body = await repo.addCreditCard(req)
    res.json(body)
}

const getCreditCards = async (req,res) => {
    const creditCards = await repo.getCreditCards(req)
    res.json(creditCards)
}
const addProduct = async (req,res) => {
    const productId = req.params.productId
    const userId = req.session.user._id
    const updatedUser = await repo.addToWishlist(userId,productId)
    res.json(updatedUser)
}
const signOut = async (req,res) => {
    const message = await repo.signOut(req)
    res.json(message)
}
const deleteProdcut = async (req,res) => {
    const productId = req.params.productId
    const userId = req.session.user._id
    const message = await repo.deleteProductFromWishlist(userId , productId)
    res.json(message)
}

const deleteCreditcard = async (req,res) => {
    const creditId = req.params.creditId
    const userId = req.session.user._id
    const message = await repo.deleteCreditCard(userId , creditId)
    res.json(message)
}
const activation = async (req,res) => {
    const message = await repo.activation(req)
    res.json(message)
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
    activation
}