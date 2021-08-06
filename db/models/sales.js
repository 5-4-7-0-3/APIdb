const {Model} = require('objection');
const Product = require('./product.js')
const Orders = require('./orders.js')

class Sales extends Model {
    static get tableName() {
        return 'sales';
        }
    static relationMappings = {
        product: {
            relation: Model.HasOneRelation,
            modelClass: Product,
            join: {
                from: 'sales.product_id',
                to: 'product_category.id'
            }
        },
        order: {
            relation: Model.HasOneRelation,
            modelClass: Orders,
            join: {
                from: 'sales.order_id',
                to: 'orders.id'
            }
        }
    };
}


module.exports = Sales;