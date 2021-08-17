const setupDb = require('./db/db-setup');
const express = require('express');
const routerUser = require('./routes/user.js');
const routerOrders = require('./routes/orders.js');
const routerProduct = require('./routes/product.js');
const routerProductCategory = require('./routes/product_category.js');
const routerSales = require('./routes/sales.js');


// set up database with objection and knex
setupDb();

const app = express();
app.use(express.json());
app.use('/user', routerUser);
app.use('/orders', routerOrders);
app.use('/product', routerProduct);
app.use('/category', routerProductCategory);
app.use('/sales', routerSales);
app.listen(3000, () => console.log('server is running on port 3000'));