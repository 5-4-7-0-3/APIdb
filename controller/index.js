const services = require('../service')
const ProductController = require('./product.js')
const UserController = require('./user.js')
const SalesController = require('./sales.js')
const ProductCategoryController = require('./product_category.js')
const OrdersController = require('./orders.js')
const DAO = require('../DAO')


module.exports = {
    productController: new ProductController(services.productService),
    userController: new UserController(services.userService, services.tokenService, DAO.tokenDAO),
    salesController: new SalesController(services.salesService),
    productCategoryController: new ProductCategoryController(services.productCategoryService),
    ordersController: new OrdersController(services.ordersService)
}

