// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');
module.exports = {

  development: {
      client: 'postgresql',
      connection: {
      host: 'ec2-54-195-76-73.eu-west-1.compute.amazonaws.com',
      port: '5432',
      database: 'd84ln059gd9lhm',
      user: 'ioyocwgnnbcsij',
      password: '5316b17d74c65ee237544837c83c99011756cdf0020ce72c2e9b4fdf10336534',
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers,
  }
    
};
