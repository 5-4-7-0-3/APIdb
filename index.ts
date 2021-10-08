/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { setupDb } from "./db/db-setup";
const PORT = process.env.PORT || 8080;
import express from "express";

import multer from "multer";

require("express-async-errors");
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// import swaggerUI from 'swagger-ui-express';
// const swagger = require('./swagger.json');

import routerUser from "./routes/user";
import routerOrders from "./routes/orders";
import routerProduct from "./routes/product";
import routerProductCategory from "./routes/product_category";
import routerSales from "./routes/sales";
import notificationService from "./service";
import routesUploads from "./routes/uploads";
setupDb();

app.use(express.json());
app.use(express.static("uploads"));
// app.use("/", (req, res) => {
//     return res.json({ message: "HALO" });
// });
app.use("/user", routerUser);
app.use("/orders", routerOrders);
app.use("/product", routerProduct);
app.use("/category", routerProductCategory);
app.use("/sales", routerSales);

app.use("/upload-image", routesUploads);

app.use("/media", express.static("uploads"));

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));
app.use(errorHandler);

io.sockets.on("connection", (socket: any) => {
    console.log("A user connected");
    notificationService.notificationService.addClient(socket);

    socket.on("disconnect", () => {
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
    res.render("error", { error: err });
}
