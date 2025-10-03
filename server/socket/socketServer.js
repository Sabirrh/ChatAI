const { Server } = require('socket.io');
const {messageHandler} = require('./handlers')
const registerSocketServer = (server) => {
    const io = new Server(server, {
        cors: {
            origin: '*', // allow a connection from anywhere (all origin)...adjust
            methods: ['GET', 'POST']
        }
    });
    io.on('connection', (socket) => {
        // console.log(`User: ${Socket.id}`)
        socket.on('user-message', (data) => {
           messageHandler(socket,data)
        })
    })
}

module.exports = { registerSocketServer }