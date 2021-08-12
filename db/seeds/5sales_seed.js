const { knexSnakeCaseMappers } = require("objection");
const Objection = require("objection");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "sales" CASCADE');

  return knex('sales').del()
    .then(async function () {
      // Inserts seed entries
      return knex('sales').insert([{
        product_id: '1',
        order_id: '1',
        quantity: '5'
      },
      {
        product_id: '2',
        order_id: '2',
        quantity: '15'
      },
      {
        product_id: '4',
        order_id: '3',
        quantity: '10'
      }]);
    });
  Objection.knexSnakeCaseMappers()
};
