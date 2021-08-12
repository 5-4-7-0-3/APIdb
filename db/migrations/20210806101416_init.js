
exports.up = function(knex) {
    return knex.schema
        .alterTable('product', (table) => {
            table.foreign('category_id')
                .references('product_category.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

        .alterTable('orders', (table) => {
            table.foreign('user_id')
                .references('user.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

        .alterTable('sales', (table) => {
            table.foreign('product_id')
                .references('product.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            table.foreign('order_id')
                .references('orders.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('sales')
        .dropTable('orders')
        .dropTable('product')
        .dropTable('product_category')
        .dropTable('user');
};
