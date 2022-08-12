const roles = require('../roles')
const admin = require('./admin.policy')
const premuimUser = require('./premuimUser.policy')
const superAdmin = require('./superAdmin.policy')
const user = require('./user.policy')

const opts = {
    [roles.SUPER_ADMIN] : {can : superAdmin},
    [roles.ADMIN] : {can : admin},
    [roles.PREMIER_USER] : {can : premuimUser},
    [roles.USER] : {can : user}, 
}
module.exports = opts