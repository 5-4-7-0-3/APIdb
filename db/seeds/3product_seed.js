const { knexSnakeCaseMappers } = require("objection");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "product" CASCADE');

  return knex('product').del()
    .then(async function () {
      // Inserts seed entries
      return knex('product').insert([{
        description: 'nylon',
        price: '100',
        amount_left: '40',
        category_id: '1'
      },
      {
        description: 'oak',
        price: '200',
        amount_left: '20',
        category_id: '2'
      },
      {
        description: 'iron',
        price: '300',
        amount_left: '50',
        category_id: '3'
      },
      {
        description: 'rook',
        price: '400',
        amount_left: '60',
        category_id: '4'
      }]);
    });
};
