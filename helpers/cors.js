exports.handleCorsPolicy = (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Allow-Creadintials", true)
    const allowedMethods = ["GET","POST" , "PUT", "DELETE"]
    if (allowedMethods.includes(req.method)) next();
    else return res.status(403).json({message : "this method isnt allowed"})
}