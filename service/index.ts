import DAO from '../DAO'
import {ProductService} from './product'
import {ProductCategoryService} from './product_category'
import {SalesService} from './sales'
import {UserService} from './user'
import {OrdersService} from './orders'
import {Notification} from './notification_service'
import {TokenService} from './token'



const notificationService = new Notification()
const productService = new ProductService(DAO.productDAO, notificationService)
const productCategoryService = new ProductCategoryService(DAO.productCategoryDAO)
const userService = new UserService(DAO.userDAO)
const salesService = new SalesService(DAO.salesDAO)
const ordersService = new OrdersService(DAO.ordersDAO)
const tokenService = new TokenService(DAO.tokenDAO)

export default {
  notificationService,
  productService,
  productCategoryService,
  userService,
  salesService,
  ordersService,
  tokenService
}
