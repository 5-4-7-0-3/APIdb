const ProductCategory = require("../db/models/product_category.js");

class ProductCategoryDAO {
    createCategory(name) {
        return ProductCategory.query().insert({
            name
        })
    }

    getCategories() {
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
    deleteCategory(id) {
        return ProductCategory.query()
            .findById(id)
            .for([id])
            .delete()


    }
}

module.exports = new ProductCategoryDAO()