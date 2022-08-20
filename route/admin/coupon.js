const app = require('express').Router()
const controller = require('../../controller/admin/coupon')
const checkAuth = require('../../utils/checkAuth')
const {checkRole} = require('../../utils/checkRole')
const endPoints = require('../../helpers/endPoints')

app.get('/',checkRole(endPoints.GET_ALL_COUPONS),controller.listCoupons)
app.get('/:couponId',checkRole(endPoints.GET_COUPON),controller.getCoupon)
app.post('/',checkRole(endPoints.CREATE_COUPON),controller.createCoupon)
app.delete('/:couponId' ,checkRole(endPoints.REMOVE_COUPON),controller.removeCoupon)
app.put('/:couponId' , checkRole(endPoints.UPDATE_COUPON) , controller.updateCoupon)

module.exports = app