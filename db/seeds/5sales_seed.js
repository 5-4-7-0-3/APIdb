const { knexSnakeCaseMappers } = require("objection");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "sales" CASCADE');

  return knex('sales').del()
    .then(async function () {
      // Inserts seed entries
      return knex('sales').insert([{
        product_id: '1',
        order_id: '1',
        quantiti: '5'
      },
      {
        product_id: '2',
        order_id: '2',
        quantiti: '15'
      },
      {
        product_id: '4',
        order_id: '3',
        quantiti: '10'
      }]);
    });
};
