const User = require('./db/models/user.js');
const ProductCategory = require('./db/models/product_category.js');
const Product = require('./db/models/product.js');
const Orders = require('./db/models/orders.js');
const Sales = require('./db/models/sales.js');


class UserDAO {
  createUser(name, login, password) {
    return User.query().insert({
      name,
      login,
      password
    })

  }
  getUsers() {
    return User.query();
  }
  getOneUser(id) {
    return User.query().findById(id);
  }
  updateUser(id, name, login, password) {
    return User.query()
        .findById(id)
        .patch({
          name,
          login,
          password
        });
  }
  deleteUser(id) {
    return User.relatedQuery('order')
        .for([id])
        .delete()


  }
}
////////////////////////////////////////////////////////////////////////////////
class ProductCategoryDAO {
  createCaregory(name) {
    return ProductCategory.query().insert({
      name
    })
  }

  getCaregories() {
    return ProductCategory.query();
  }

  getOneCategory(id) {
    return ProductCategory.query().findById(id);
  }

  updateCategory(id, name) {
    return ProductCategory.query()
        .findById(id)
        .patch({
          name
        });
  }
}
////////////////////////////////////////////////////////////////////////////////
class ProductDAO {
  createProduct(description, price, amount_left) {
    return Product.query().insert({
      description,
      price,
      amount_left
    })
  }

  getProduct() {
    return Product.query();
  }

  getOneProduct(id) {
    return Product.query().findById(id);
  }

  updateProduct(id, description, price, amount_left, category_id) {
    return Product.query()
        .findById(id)
        .patch({
          description,
          price,
          amount_left
        });
  }
}
/////////////////////////////////////////////////////////////////////////////////
class OrdersDAO {
  createOrder(orders_date, user_id) {
    return Orders.query().insert({
      orders_date,
      user_id
    })
  }

  getOrders() {
    return Orders.query();
  }

  getOneOrder(id) {
    return Orders.query().findById(id);
  }

  updateOrder(id, orders_date, user_id) {
    return Orders.query()
        .findById(id)
        .patch({
          orders_date,
          user_id
        });
  }
}
//////////////////////////////////////////////////////////////////////////////////
class SalesDAO {
  createSales(product_id, order_id, quantiti) {
    return Sales.query().insert({
      product_id,
      order_id,
      quantiti
    })
  }

  getSales() {
    return Sales.query();
  }

  getOneSale(id) {
    return Sales.query().findById(id);
  }

  updateSale(id, product_id, order_id, quantiti) {
    return Sales.query()
        .findById(id)
        .patch({
          product_id,
          order_id,
          quantiti
        });
  }
}
/////////////////////////////////////////////////////////
module.exports = {
  User: new UserDAO(),
  ProductCategory: new ProductCategoryDAO(),
  Product: new ProductDAO(),
  Orders: new OrdersDAO(),
  Sales: new SalesDAO()
}
