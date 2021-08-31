const services = require('../service')
const ProductController = require('./product.js')
const UserController = require('./user.js')
const SalesController = require('./sales.js')
const ProductCategoryController = require('./product_category.js')
const OrdersController = require('./orders.js')



module.exports = {
    productController: new ProductController(services.productService),
    userController: new UserController(services.userService, services.tokenService),
    salesController: new SalesController(services.salesService),
    productCategoryController: new ProductCategoryController(services.productCategoryService),
    ordersController: new OrdersController(services.ordersService)
}

