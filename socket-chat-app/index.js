const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

const usersMap = new Map()

io.on('connection', (socket) => {
  console.log('A user connected')

  usersMap.set(socket.id, socket.id)

  socket.on('change username', (name) => {
    socket.broadcast.emit('server message', 'A user joined the chat room!')
  })
  socket.on('disconnect', () => {
    console.log('A user disconnected')
    io.emit('server message', `${usersMap.get(socket.id)} left the chat room!`)
    usersMap.delete(socket.id)
  })
  socket.on('chat message', (msg) => {
    console.log('A message has been sent:' + msg)
    socket.broadcast.emit('chat message', `${usersMap.get(socket.id)}: ${msg}`)
    io.emit('chat message', `From server: ${msg}`)
  })

  socket.on('change username', (username) => {
    usersMap.set(socket.id, username)
  })

});

server.listen(3000, () => {
  console.log('listening on :3000');
});