const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('../client')); // Servir arquivos estáticos do diretório 'client'

io.on('connection', (socket) => {
    console.log('New user connected');

    // Recebe a localização de um usuário e a envia para todos os outros usuários
    socket.on('sendLocation', (locationData) => {
        io.emit('locationUpdate', locationData); // Envio para todos incluindo o remetente
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
