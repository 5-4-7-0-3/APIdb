
exports.up = function(knex) {
    return knex.schema
    .createTable('user', (table) => {
      table.increments();
      table.varchar('name').notNullable();
      table.varchar('login').notNullable();
      table.varchar('password').notNullable();
    })

    .createTable('product_category', (table) => {
      table.increments();
      table.varchar('name').notNullable();
    })

    .createTable('product', (table) => {
      table.increments();
      table.varchar('description').notNullable();
      table.integer('price').notNullable();
      table.integer('amount_left').notNullable();
      table.integer('category_id').notNullable();

      table.foreign('category_id').references('id').inTable('product_category').deferrable('deferred');
    })

    .createTable('orders', (table) => {
      table.increments();
      table.date('orders_date').notNullable();
      table.integer('user_id').notNullable();
      
      table.foreign('user_id').references('id').inTable('user').deferrable('deferred');
    })

    .createTable('sales', (table) => {
        table.increments();
        table.integer('product_id').notNullable();
      table.integer('order_id').notNullable();
      table.integer('quantiti').notNullable();

      table.foreign('product_id').references('id').inTable('product').deferrable('deferred');
      table.foreign('order_id').references('id').inTable('orders').deferrable('deferred');
    });
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('sales')
      .dropTableIfExists('orders')
      .dropTableIfExists('product')
      .dropTableIfExists('product_category')
      .dropTableIfExists('user');
};
