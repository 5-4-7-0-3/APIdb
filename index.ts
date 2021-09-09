const setupDb = require('./db/db-setup');
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


const swaggerUI = require('swagger-ui-express');
const swagger = require('./swagger.json');

const routerUser = require('./routes/user.js');
const routerOrders = require('./routes/orders.js');
const routerProduct = require('./routes/product.js');
const routerProductCategory = require('./routes/product_category.js');
const routerSales = require('./routes/sales.js');
const notificationService = require('./service')


setupDb();


app.use(express.json());
app.use('/user', routerUser);
app.use('/orders', routerOrders);
app.use('/product', routerProduct);
app.use('/category', routerProductCategory);
app.use('/sales', routerSales);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));
app.use(errorHandler);


io.sockets.on('connection', (socket) => {
    console.log("A user connected");
    notificationService.notificationService.addClient(socket)

    socket.on('disconnect', () => {
        notificationService.notificationService.removeClient(socket)
        console.log("A user disconnected");
    });
});



server.listen(PORT, () => console.log(`server is running on port ${PORT}`));





function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}

