class Notification {
    constructor() {
        this.connections = []

    }

    addClient(socket) {
        this.connections.push(socket);
    }

    removeClient(socket){
        this.connections.splice(this.connections.indexOf(socket), 1);
    }

    sendAll(id, description) {
        this.connections.forEach(socket => {
            socket.emit("notification", 'Product changed', id, description);
        });
        
        
    }

}
module.exports = Notification