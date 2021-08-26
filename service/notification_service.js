
class Notification {
    constructor() {
        this.socket
        this.connections = []

    }

    addClient(socket) {
        this.connections.push(socket);
        console.log(this.connections);
    }

    removeClient(socket){
        this.connections.splice(connections.indexOf(socket), 1);
    }

    sendAll() {
        
    }

}
module.exports = Notification