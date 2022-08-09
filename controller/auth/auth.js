const repo = require('../../modules/user/repo')
const hour = 3600000

const activation = async (req,res) => {
    if (req.params.token == req.session.token){
        await repo.update(req.session.user._id , {isActive : true})
        res.json({message : "activated"})
    }else{
        res.json({message : "wrong token"})
    }
}

const signOut = async (req,res) => {
        if (req.session)
        req.session.destroy();
    res.json({
        status : 201,
        message : 'done'
    })
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

module.exports = {
    login,
    activation,
    signOut,
    register
}