const repo = require("../modules/user/repo")




const getAllUsers = async (req,res) => {
    const users = await repo.list()
    res.status(201).json({message : "success", users : users})
}

const register = async (req,res)=> {
    const messages = await repo.add(req.body)
    res.status(201).json({messages})
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
    const userId = req.params.userId
    const user = repo.getWishlist(userId)
    res.json(user)
}
const addCreditCard = async (req,res) => {
    const body = await repo.addCreditCard(req)
    console.log(body)
    res.json(body)
}

const getCreditCards = async (req,res) => {
    const creditCards = await repo.getCreditCards(req)
    res.json(creditCards)
}



module.exports = {
    getAllUsers,
    register,
    getUser,
    login,
    updateUser,
    addCreditCard,
    getUserWishlist,
    getCreditCards
}