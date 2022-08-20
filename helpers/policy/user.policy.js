const endPoints = require("../endPoints")


module.exports = [
    endPoints.GET_USER,
    endPoints.UPDATE_USER,
    endPoints.GET_CREDITCARDS,
    endPoints.ADD_CREDITCARD,
    endPoints.REMOVE_CREDITCARD,
    endPoints.ADD_TO_WISHLIST,
    endPoints.REMOVE_FROM_WISHLIST,
    endPoints.GET_ALL_PRODUCTS,
    endPoints.GET_PRODUCT,
    endPoints.GET_PRODUCT_BY_CATEGORY,
    endPoints.GET_CART,
    endPoints.ADD_PRODUCT_TO_CART,
    endPoints.REMOVE_PRODUCT_FROM_CART,
    endPoints.FLUSH_CART,
    endPoints.CREATE_ORDER,
    endPoints.DELETE_ORDER,
    endPoints.GET_ORDER,
    endPoints.UPDATE_ORDER,
    endPoints.GET_CATEGORY,
    endPoints.USE_COUPON,
    endPoints.GET_MY_ORDERS,
    endPoints.GET_ALL_CATEGORIES
]