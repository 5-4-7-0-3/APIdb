
const setupDb = require('./db/db-setup');
const express = require('express');
const router = require('./routes');

// set up database with objection and knex
setupDb();

const app = express();
app.use(express.json());
app.use('/api',router);
app.listen(3000, () => console.log('server is running on port 3000'));