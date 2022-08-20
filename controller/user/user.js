const repo = require("../../modules/user/repo")
const hour = 3600000
const {sendMail} = require('../../helpers/email')
const { get } = require("moongose/routes")


const getUser = async(req,res) => {
    res.json(await repo.get({_id : req.session.user._id}))
}

const updateUser = async (req,res) => {
    const userId = req.session.user._id
    const form = req.body
    const message = await repo.update(userId , form)
    if (message.success) {
        user = message.user
        res.json(user)
    }else {
        res.json(message)
    }
    
}


const getUserWishlist = async (req,res) => {
    const user = await repo.get({ _id : req.session.user._id})
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
    const user = await repo.get({ _id : req.session.user._id})
    if (user) res.json({message : "success" , creditCards : user.creditCards})
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
    res.json(await repo.remove(req.session.user._id))
}

module.exports = {
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