const RBAC = require('easy-rbac')
const opts = require('./policy/options')
const rbac = new RBAC(opts)
module.exports = rbac