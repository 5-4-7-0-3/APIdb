const { knexSnakeCaseMappers } = require("objection");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "product_category" CASCADE');

  return knex('product_category').del()
    .then(async function () {
      // Inserts seed entries
      return knex('product_category').insert([{
        name: 'rope',
      },
      {
        name: 'wood',
      },
      {
        name: 'metal',
      },
      {
        name: 'brick',
      }]);
    });
};
