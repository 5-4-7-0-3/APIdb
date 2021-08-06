

const {Model} = require('objection');
const Orders = require('./orders.js')


class User extends Model {
    static get tableName() {
        return 'user';
    }

    static relationMappings = {
        order: {
            relation: Model.HasManyRelation,
            modelClass: Orders,
            join: {
                from: 'user.id',
                to: 'orders.user_id'
            }
        }
    };
}

module.exports = User;