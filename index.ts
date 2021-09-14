import { setupDb } from './db/db-setup';
const PORT = process.env.PORT || 3000;
import express from 'express';
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


import swaggerUI from 'swagger-ui-express';
const swagger = require('./swagger.json');

import routerUser from './routes/user';
import routerOrders from './routes/orders';
import routerProduct from './routes/product';
import routerProductCategory from './routes/product_category';
import routerSales from './routes/sales';
import notificationService from './service';


setupDb();


app.use(express.json());
app.use('/user', routerUser);
app.use('/orders', routerOrders);
app.use('/product', routerProduct);
app.use('/category', routerProductCategory);
app.use('/sales', routerSales);

app.use('/static', express.static('db'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));
app.use(errorHandler);


io.sockets.on('connection', (socket) => {
  console.log("A user connected");
  notificationService.notificationService.addClient(socket);

  socket.on('disconnect', () => {
    notificationService.notificationService.removeClient(socket);
    console.log("A user disconnected");
  });
});

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));

export = app;

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}
