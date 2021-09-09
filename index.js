var setupDb = require('./db/db-setup');
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var swaggerUI = require('swagger-ui-express');
var swagger = require('./swagger.json');
var routerUser = require('./routes/user.js');
var routerOrders = require('./routes/orders.js');
var routerProduct = require('./routes/product.js');
var routerProductCategory = require('./routes/product_category.js');
var routerSales = require('./routes/sales.js');
var notificationService = require('./service');
setupDb();
app.use(express.json());
app.use('/user', routerUser);
app.use('/orders', routerOrders);
app.use('/product', routerProduct);
app.use('/category', routerProductCategory);
app.use('/sales', routerSales);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));
app.use(errorHandler);
io.sockets.on('connection', function (socket) {
    console.log("A user connected");
    notificationService.notificationService.addClient(socket);
    socket.on('disconnect', function () {
        notificationService.notificationService.removeClient(socket);
        console.log("A user disconnected");
    });
});
server.listen(PORT, function () { return console.log("server is running on port " + PORT); });
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
}
