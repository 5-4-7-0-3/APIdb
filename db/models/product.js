const { Model } = require('objection');
const ProductCategory = require('./product_category.js')

class Product extends Model {
    static get tableName() {
        return 'product';
    }

    static relationMappings = {
        category: {
            relation: Model.BelongsToOneRelation,
            modelClass: ProductCategory,
            join: {
                from: 'product.category_id',
                to: 'product_category.id'
            }
        }
    };

}
module.exports = Product;