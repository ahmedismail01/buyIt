const app = require('express').Router()
const controller = require('../../controller/user/coupon')
const checkAuth = require('../../utils/checkAuth')


app.get('/',checkAuth,controller.listCoupons)
app.get('/:couponId',checkAuth,controller.getCoupon)
app.post('/',checkAuth,controller.createCoupon)
app.delete('/:couponId' ,checkAuth,controller.removeCoupon)
app.put('/:couponId' , checkAuth , controller.updateCoupon)

module.exports = app