const repo = require("../../modules/user/repo")
const hour = 3600000
const {sendMail} = require('../../helpers/email')


const getAllUsers = async (req,res) => {
    const users = await repo.list()
    res.status(201).json({message : "success", users : users})
}

const getUser = async  (req,res) => {
    const user = await repo.get({_id :req.params.userId})
    if (user) res.json({message : "success" , user})
    else res.json({message : "not found"})
}

const removeUser = async (req,res) => {
    res.json(await repo.remove(req.params.userId))
}

module.exports = {
    getAllUsers,
    getUser,
    removeUser
}