const ProductCategory = require("../db/models/product_category.js");

class ProductCategoryDAO {
    createCategory(name) {

        return new ProductCategory({
            name
        }).save()
    }

    getCategories() {
        return ProductCategory.find();
    }

    getOneCategory(id) {
        return ProductCategory.findById(id);
    }

    updateCategory(id, name) {

        return ProductCategory.findOneAndUpdate(
            {_id: id},
            {
                $set: {name}
            },
            {new: true}
            );
    }

    deleteCategory(id) {
        return ProductCategory.deleteOne({id})
    }
}

module.exports = new ProductCategoryDAO()
