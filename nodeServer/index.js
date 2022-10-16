//Node server which handle socket io connections
const io = require('socket.io')(8000)

const users ={}

io.on('connection', socket =>{    //io.on is used to listen all connections 
    socket.on('user-joined', name =>{   //socket.on is used to listen for new conections means whenever a new user is joined.
        users[socket.id] = name;
    })
})