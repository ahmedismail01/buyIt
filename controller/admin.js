const repo = require("../modules/user/repo")

const changeRole = async (req,res) => {
    const userId = req.params.userId
    const {role} = req.body.role
    await User.findByIdAndUpdate({_id : userId}, {role : role})
    res.status(201).json({message : success})
}


const deleteUser = async (req,res) =>{
    const userId = req.params.userId
    await  repo.remove(userId)
    res.status(201).json({message : "Done"})
}
const getAllUsers = async (req,res) => {
    const users = await repo.list()
    res.status(201).json({message : "success", users : users})
}

const register = async (req,res)=> {
    const user = await repo.add(req.body)
    res.status(201).json({ message : user})
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


module.exports = {
    getAllUsers,
    register,
    deleteUser,
    getUser,
    login,
    changeRole,
    updateUser
}