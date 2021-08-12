const Product = require("../db/models/product.js");

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
                amount_left,
                category_id
            });
    }
    deleteProduct(id) {
        return Product.query()
            .findById(id)
            .for([id])
            .delete()


    }
}

module.exports = new ProductDAO()