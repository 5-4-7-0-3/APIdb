
exports.up = function(knex) {
    knex.schema.alterTable('orders', function (table) {
        table.integer('user_id').unsigned()
        table.foreign('user_id')
            .references('id')
            .inTable('user')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    knex.schema.alterTable('sales', function (table) {
        table.integer('order_id').notNullable();
        table.foreign('order_id')
            .references('id')
            .inTable('orders')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');;
    })
    knex.schema.alterTable('sales', function (table) {
        table.integer('product_id').notNullable();
        table.foreign('product_id')
            .references('id')
            .inTable('product')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');;
    })
    knex.schema.alterTable('product', function (table) {
        table.integer('category_id').notNullable();
        table.foreign('category_id')
            .references('id')
            .inTable('product_category')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');;
    })
};

exports.down = function(knex) {
  
};
