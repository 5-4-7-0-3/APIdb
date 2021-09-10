import io from "socket.io-client";

const socket = io("ws://localhost:3000");


socket.on("notification", (arg1: any, arg2: any) => {
    console.log(arg1);
    console.log(arg2)
});

