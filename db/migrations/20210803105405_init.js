exports.up = function (knex) {
    return knex.schema
        .createTable('user', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.string('login').notNullable();
            table.string('password').notNullable();
            table.string('role').notNullable();
        })

        .createTable('product_category', (table) => {
            table.increments();
            table.string('name').notNullable();
        })

        .createTable('product', (table) => {
            table.increments();
            table.string('description').notNullable();
            table.integer('price').notNullable();
            table.integer('amount_left').notNullable();
            table.integer('category_id').notNullable();

        })

        .createTable('orders', (table) => {
            table.increments();
            table.date('orders_date').notNullable();
            table.integer('user_id').notNullable();


        })

        .createTable('sales', (table) => {
            table.increments();
            table.integer('product_id').notNullable();
            table.integer('order_id').notNullable();
            table.integer('quantity').notNullable();


        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('sales')
        .dropTableIfExists('orders')
        .dropTableIfExists('product')
        .dropTableIfExists('product_category')
        .dropTableIfExists('user');
};
