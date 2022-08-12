module.exports = checkAuth = (req , res, next) => {
    if(req.session.user){
        if(req.session.user.isActive) next();
        else res.json({message : "you have to activate your account"})
    }else{
        res.json({message : "you have to sign in"})
    }
    
}