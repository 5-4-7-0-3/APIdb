const service = require('../service/service.js');

class UserController {
  async createUser(req, res) {
    try {
      const {name, login, password} = req.body
      const newUser = await service.User.createUser(name, login, password)
      res.json(newUser)

    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }

  }
  async getUsers(req, res) {
    try {
      const user = await service.User.getUsers();
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async getOneUser(req, res) {
    try {
      const oneUser = await service.User.getOneUser(req.params.id);
      res.json(oneUser);
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async updateUser(req, res) {
    try {
      const {name, login, password} = req.body
      const updateUser = await service.User.updateUser(req.params.id, name, login, password)
      res.json(updateUser)
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async deleteUser(req, res) {
    try {
      const deleteUser = await service.User.deleteUser(req.params.id)
      res.json(deleteUser)
    }
    catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}
///////////////////////////////////////////////////////////////////////
class ProductCategoryController {
  async createProductCategory(req, res) {
    try {
      const {name} = req.body
      const newProductCategory = await service.ProductCategory.createCaregory(name)
      res.json(newProductCategory)

    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }

  }
  async getCategories(req, res) {
    try {
      const categories = await service.ProductCategory.getCategories();
      res.json(categories);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async getOneCategory(req, res) {
    try {
      const oneCategory = await service.ProductCategory.getOneCategory(req.params.id);
      res.json(oneCategory);
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async updateCategory(req, res) {
    try {
      const {name} = req.body
      const updateCategory = await service.ProductCategory.updateCategory(req.params.id, name)
      res.json(updateCategory)
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  // async deleteCategory(req, res) {
  //   try {
  //     const deleteUser = await service.User.deleteUser(req.params.id)
  //     res.json(deleteUser)
  //   }
  //   catch (err) {
  //     console.error(err);
  //     res.status(500).json(err);
  //   }
  // }
}
//////////////////////////////////////////////////////////////////////////////////////
class ProductController {
  async createProduct(req, res) {
    try {
      const {description, price, amount_left, category_id} = req.body
      const newProduct = await service.Product.createProduct(description, price, amount_left, category_id)
      res.json(newProduct)

    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }

  }
  async getProduct(req, res) {
    try {
      const product = await service.Product.getProduct();
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async getOneProduct(req, res) {
    try {
      const oneProduct = await service.Product.getOneProduct(req.params.id);
      res.json(oneProduct);
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async updateProduct(req, res) {
    try {
      const {description, price, amount_left, category_id} = req.body
      const updateProduct = await service.Product.updateProduct(req.params.id, description, price, amount_left, category_id)
      res.json(updateProduct)
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////

class OrdersController {
  async createOrder(req, res) {
    try {
      const {orders_date, user_id} = req.body
      const newOrder = await service.Orders.createOrder(orders_date, user_id)
      res.json(newOrder)

    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }

  }
  async getOrders(req, res) {
    try {
      const order = await service.Orders.getOrders();
      res.json(order);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async getOneOrder(req, res) {
    try {
      const oneOrder = await service.Orders.getOneOrder(req.params.id);
      res.json(oneOrder);
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async updateOrder(req, res) {
    try {
      const {orders_date, user_id} = req.body
      const updateOrder = await service.Orders.updateOrder(req.params.id, orders_date, user_id)
      res.json(updateOrder)
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}
///////////////////////////////////////////////////////////////
class SalesController {
  async createSales(req, res) {
    try {
      const {product_id, order_id, quantiti} = req.body
      const newSale = await service.Sales.createSales(product_id, order_id, quantiti)
      res.json(newSale)

    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }

  }
  async getSales(req, res) {
    try {
      const sale = await service.Sales.getSales();
      res.json(sale);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async getOneSale(req, res) {
    try {
      const oneSale = await service.Sales.getOneSale(req.params.id);
      res.json(oneSale);
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async updateSale(req, res) {
    try {
      const {product_id, order_id, quantiti} = req.body
      const updateSale = await service.Sales.updateSale(req.params.id, product_id, order_id, quantiti)
      res.json(updateSale)
    }catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = {
  User: new UserController(),
  ProductCategory: new ProductCategoryController(),
  Product: new ProductController(),
  Orders: new OrdersController(),
  Sales: new  SalesController()
}