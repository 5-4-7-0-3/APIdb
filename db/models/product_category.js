const {Model} = require('objection');
const Product = require('./product.js')
class ProductCategory extends Model {
    static get tableName() {
        return 'product_category';
    }
    static relationMappings = {
        category: {
            relation: Model.HasManyRelation,
            modelClass: Product,
            join: {
                from: 'product_category.id',
                to: 'product.category_id'
            }
        }
    };
}


module.exports = ProductCategory;