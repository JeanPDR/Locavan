const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the client directory
app.use(express.static('../client'));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('updateLocation', (locationData) => {
        // Emit location to all clients except the sender
        socket.broadcast.emit('locationUpdate', locationData);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
