const Product = require("../db/models/product.js");
class ProductDAO {
    createProduct(description, price, amount_left,category_id) {
        return new Product({
            description,
            price,
            amount_left,
            category_id
        }).save()
    }

    getProduct() {
        return Product.find();
    }

    getOneProduct(id) {
        return Product.findById(id);
    }

    updateProduct(id, description, price, amount_left, category_id) {
        return Product.findOneAndUpdate(
            {_id: id}, 
            {
                $set: {description, price, amount_left, category_id}
            },
            {new: true}
            );
    }
    deleteProduct(id) {
        return Product.deleteOne({id})


    }
}

module.exports = new ProductDAO()