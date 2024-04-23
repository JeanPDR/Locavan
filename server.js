const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('client'));

io.on('connection', (socket) => {
    console.log('New user connected');

    // Recebe a localização de um cliente e envia para todos os clientes conectados
    socket.on('location', (data) => {
        console.log('Location received: ', data);
        io.emit('locationUpdate', data); // Envio para todos os clientes
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
