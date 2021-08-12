const {Model} = require('objection');
const User = require('./user.js')


class Orders extends Model {
    static get tableName() {
        return 'orders';
        }
    static relationMappings = {
        user: {
            relation: Model.HasOneRelation,
            modelClass: User,
            join: {from: 'orders.user_id',
                to: 'user.id'
            }
        }
    };
}


module.exports = Orders;