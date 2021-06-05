// 以下都是socket.io
const { instrument } = require('@socket.io/admin-ui')
const io = require('socket.io')(3000, {
  cors: {
    origin: ['http://localhost:9000', 'https://admin.socket.io/'],
  },
})

io.on('connection', (socket) => {
  console.log(socket.id)

  socket.on('client-send-message', (msg, room) => {
    // 下面這個會送給全部的人
    // io.emit('server-send-back', `server get this msg ${msg} from 'client`)

    // 下面這個，只送給除了原本client以外的人
    if (!room) {
      socket.broadcast.emit(
        'server-send-back',
        `server get this msg ${msg} from 'client`
      )
    } else {
      socket.to(room).emit('server-send-back', msg)
    }
    console.log('msg', msg)
  })

  socket.on('join-room', (room, cb) => {
    console.log('room', room, cb)
    cb(room) // <-- 執行client端的fn，通常用於網路有問題，告訴client
    socket.join(room)
  })
})

instrument(io, { auth: false })
