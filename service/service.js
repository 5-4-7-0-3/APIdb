
const DAO = require('../dao.js');

class UserService {
  createUser(name, login, password) {
    return DAO.User.createUser(name, login, password)
  }

  getUsers() {
    return DAO.User.getUsers();
  }

  getOneUser(id) {
    return DAO.User.getOneUser(id);
  }

  updateUser(id, name, login, password) {
    return DAO.User.updateUser(id, name, login, password);
  }

  deleteUser(id) {
    return DAO.User.deleteUser(id);
  }
//////////////////////
}

  class ProductCategoryService {
  createCaregory(name) {
    return DAO.ProductCategory.createCaregory(name);
  }

  getCategories() {
    return DAO.ProductCategory.getCaregories();
  }

  getOneCategory(id) {
    return DAO.ProductCategory.getOneCategory(id);
  }

  updateCategory(id, name) {
    return DAO.ProductCategory.updateCategory(id, name);
  }

  // deleteCategory(id) {
  //
  //
  //  }
}
//////////////////////////////////////////////////////
class ProductService {
  createProduct(description, price, amount_left,category_id) {
    return DAO.Product.createProduct(description, price, amount_left,category_id);
  }

  getProduct() {
    return DAO.Product.getProduct();
  }

  getOneProduct(id) {
    return DAO.Product.getOneProduct(id);
  }

  updateProduct(id, description, price, amount_left, category_id) {
    return DAO.Product.updateProduct(id, description, price, amount_left, category_id);
  }
}

class OrdersService {
  createOrder( orders_date, user_id) {
    return DAO.Orders.createOrder( orders_date, user_id);
  }

  getOrders() {
    return DAO.Orders.getOrders();
  }

  getOneOrder(id) {
    return DAO.Orders.getOneOrder(id);
  }

  updateOrder(id,  orders_date, user_id) {
    return DAO.Orders.updateOrder(id,  orders_date, user_id);
  }
}

/////////////////////////////////////////////////////////////
class SalesService {
  createSales( product_id, order_id, quantiti) {
    return DAO.Sales.createSales( product_id, order_id, quantiti);
  }

  getSales() {
    return DAO.Sales.getSales();
  }

  getOneSale(id) {
    return DAO.Sales.getOneSale(id);
  }

  updateSale(id, product_id, order_id, quantiti) {
    return DAO.Sales.updateSale(id, product_id, order_id, quantiti);
  }
}



module.exports = {
  User: new UserService(),
  ProductCategory: new ProductCategoryService(),
  Product: new ProductService(),
  Orders: new OrdersService(),
  Sales: new SalesService(),
}