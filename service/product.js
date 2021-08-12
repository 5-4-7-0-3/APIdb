

class ProductService {
    constructor(productDAO) {
        this.productDAO = productDAO
    }
    createProduct(description, price, amount_left,category_id) {
        return this.productDAO.createProduct(description, price, amount_left,category_id);
    }

    getProduct() {
        return this.productDAO.getProduct();
    }

    getOneProduct(id) {
        return this.productDAO.getOneProduct(id);
    }

    updateProduct(id, description, price, amount_left, category_id) {
        return this.productDAO.updateProduct(id, description, price, amount_left, category_id);
    }
    deleteProduct(id) {
        return this.productDAO.deleteProduct(id);
    }

}
module.exports = ProductService