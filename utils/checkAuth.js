module.exports = checkAuth = (req , res, next) => {
    if(req.session.user) next();
    else res.json({message : "you have to sign in"})
}