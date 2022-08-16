const rbac = require('../helpers/rbac')




exports.checkRole = (endPoint) =>{
    return async (req,res,next) =>{
        await rbac.can(req.session.user.role, endPoint)
        .then(result => {
          if (result) {
            next();
          } else {
            res.status(401).json({message : "you are not allowed"})
          }
        })
        .catch(err => {
          console.log(err)
        });
    }
}