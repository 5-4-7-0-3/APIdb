const io = require("socket.io-client");

const socket = io("ws://localhost:3000");


socket.on("notification", (arg1, arg2) => {
    console.log(arg1); 
    console.log(arg2)
});

