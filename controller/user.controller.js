const User = require("../modules/user.module")




const getAllUsers = async (req,res) => {
    const users = await User.find({})
    res.status(201).json({message : success, users : users})
}

const register = async (req,res)=> {
    const user = new User(req.body)
    await user.save()
    res.status(201).json({ message : user})
}
const deleteUser = async (req,res) =>{
    const userId = req.params.userId
    await  User.findByIdAndDelete({ _id : userId})
    res.status(201).json({message : "Done"})
}

const updateUser = async (req,res) => {
    const userId = req.parmas.userId
    const {name , phone , password , email , address}  = req.body
    await User.findByIdAndUpdate({ _id : userId} , { name , phone , password , email , address })
}

const changeRole = async (req,res) => {
    const userId = req.params.userId
    const {role} = req.body.role
    await User.findByIdAndUpdate({_id : userId}, {role : role})
    res.status(201).json({message : success})
}

const login = async (req,res) => {
    const {email , password} = req.body
    const user = await User.find({email : email})
    if (user) {
        if (user.password == password) {
            res.status(201).json({message : "you have logged in"})
        }else {
            res.json({message : "wrong password"})
        }
    }else{
        res.json({message : "you need to register if you dont have an email"})
    }
}

const getUser = async  (req,res) => {
    const userId = req.params.userId
    const user = User.findById({_id : userId})
    if (user) res.json({message : success , user})
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