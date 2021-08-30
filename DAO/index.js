
const OrdersDAO = require('./orders.js')
const ProductDAO = require('./product.js')
const ProductCategoryDAO = require('./product_category.js')
const SalesDAO = require('./sales')
const UserDAO = require('./user.js')
const TokenDAO = require('./token.js')
module.exports = {
    productDAO: ProductDAO,
    ordersDAO: OrdersDAO,
    productCategoryDAO: ProductCategoryDAO,
    salesDAO: SalesDAO,
    userDAO: UserDAO,
    tokenDAO: TokenDAO
}