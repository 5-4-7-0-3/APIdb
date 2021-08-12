const DAO = require('../DAO')
const ProductService = require('./product.js')
const ProductCategoryService = require('./product_category.js')
const SalesService = require('./sales.js')
const UserService = require('./user.js')
const OrdersService = require('./orders.js')



module.exports = {
    productService: new ProductService(DAO.productDAO),
    productCategoryService: new ProductCategoryService(DAO.productCategoryDAO),
    userService: new UserService(DAO.userDAO),
    salesService: new SalesService(DAO.salesDAO),
    ordersService: new OrdersService(DAO.ordersDAO)
}