const repo = require("../../modules/user/repo")
const hour = 3600000
const {sendMail} = require('../../helpers/email')


const getAllUsers = async (req,res) => {
    const users = await repo.list()
    res.status(201).json({message : "success", users : users})
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




const getUser = async  (req,res) => {
    const user = await repo.get({_id :req.params.userId})
    if (user) res.json({message : "success" , user})
    else res.json({message : "not found"})
}

const getUserWishlist = async (req,res) => {
    const user = await repo.get({ _id : req.params.userId})
    if (user) res.json({message : "success" , wishlist : user.wishlist})
    else res.json({message : "not found"})
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
    else res.json({message : "not found"})
}
const addProduct = async (req,res) => {
    const productId = req.params.productId
    const userId = req.session.user._id
    const updatedUser = await repo.addToWishlist(userId,productId)
    res.json({message : updatedUser})
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

const removeUser = async (req,res) => {
    res.json(await repo.remove(req.params.userId))
}




module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    addCreditCard,
    getUserWishlist,
    getCreditCards,
    deleteCreditcard,
    deleteProdcut,
    addProduct,
    removeUser
}