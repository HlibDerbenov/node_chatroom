const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  socket.on('chatMessage', message => {
    io.emit('chatMessage', message);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});