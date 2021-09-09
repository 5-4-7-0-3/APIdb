var io = require("socket.io-client");
var socket = io("ws://localhost:3000");
socket.on("notification", function (arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
});
