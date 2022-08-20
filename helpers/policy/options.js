const roles = require('../roles')
const admin = require('./admin.policy')
const premuimUser = require('./premuimUser.policy')
const superAdmin = require('./superAdmin.policy')
const user = require('./user.policy')
const deliveryEgent = require('./deliveryEgent.policy')

const opts = {
    [roles.SUPER_ADMIN] : {can : superAdmin},
    [roles.ADMIN] : {can : admin},
    [roles.PREMIER_USER] : {can : premuimUser},
    [roles.USER] : {can : user}, 
    [roles.DELIVERY_EGENT] : {can : deliveryEgent}
}
module.exports = opts