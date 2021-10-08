import services from "../service";
import { ProductController } from "./product";
import { UserController } from "./user";
import { SalesController } from "./sales";
import { ProductCategoryController } from "./product_category";
import { OrdersController } from "./orders";
import { UploadsController } from "./uploads";

const productController = new ProductController(services.productService);
const userController = new UserController(
    services.userService,
    services.tokenService
);
const salesController = new SalesController(services.salesService);
const productCategoryController = new ProductCategoryController(
    services.productCategoryService
);
const ordersController = new OrdersController(services.ordersService);
const uploadsController = new UploadsController();

export default {
    productController,
    userController,
    salesController,
    productCategoryController,
    ordersController,
    uploadsController,
};
