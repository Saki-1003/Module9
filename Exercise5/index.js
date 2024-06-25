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
const whoIsTypingSet = new Set()

io.on('connection', (socket) => {
  const updateUsersTyping = () => {
    const usersTyping = Array.from(whoIsTypingSet).map(socketId => {
      return usersMap.get(socketId)
    })
    console.log(usersTyping)
    io.emit('usersTyping', usersTyping)
  }

  function getUsersOnline() {
    const userNames = Array.from(usersMap.values())
    io.emit('usersOnline', userNames)
  }
  console.log('A user connected')

  usersMap.set(socket.id, socket.id)
  getUsersOnline()

  socket.on('change username', (username) => {
    usersMap.set(socket.id, username)
    socket.broadcast.emit('server message', 'A user joined the chat room!')
    getUsersOnline()
  })
  socket.on('disconnect', () => {
    console.log('A user disconnected')
    io.emit('server message', `${usersMap.get(socket.id)} left the chat room!`)
    usersMap.delete(socket.id)
    whoIsTypingSet.delete(socket.id)
    updateUsersTyping()
    getUsersOnline()
  })
  socket.on('chat message', (msg) => {
    console.log('A message has been sent:' + msg)
    socket.broadcast.emit('chat message', `${usersMap.get(socket.id)}: ${msg}`)
    io.emit('chat message', `From server: ${msg}`)
    whoIsTypingSet.delete(socket.id)
    updateUsersTyping()
  })

  socket.on('start typing', () => {
    console.log('someone start typing.')
    whoIsTypingSet.add(socket.id)
    updateUsersTyping()
  })
  socket.on('user stopped typing', () => {
    console.log('user stopped typing.')
    whoIsTypingSet.delete(socket.id)
    updateUsersTyping()
  })

});

server.listen(3000, () => {
  console.log('listening on :3000');
});