const { knexSnakeCaseMappers } = require("objection");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "orders" CASCADE');

  return knex('orders').del()
    .then(async function () {
      // Inserts seed entries
      return knex('orders').insert([{
        orders_date: '2020-6-14',
        user_id: '1'
      },
      {
        orders_date: '2021-8-12',
        user_id: '2'
      },
      {
        orders_date: '2019-12-18',
        user_id: '3'
      }]);
    });
};
