//Node server which handle socket io connections
const io = require('socket.io')(8000)

const users ={}

io.on('connection', socket =>{    //io.on is used to listen all connections 
    socket.on('new-user-joined', name =>{   //socket.on is used to listen for new conections means whenever a new user is joined.
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name); //it will broadcast message to every user except that one
    })

    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    })
})