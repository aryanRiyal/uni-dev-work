const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);
const path = require("path");

app.use("/", express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log(`Connection Established with --> ${socket.id}`);

    socket.on("send_msg", (data) => {
        socket.emit("received_msg", {
            msg: data.msg,
            id: socket.id
        });
    });
});

server.listen(3000, () => {
    console.log("server running at port 3000");
});
