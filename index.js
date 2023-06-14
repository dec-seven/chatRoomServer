const koa = require('koa') 
const app = new koa()

const server = app.listen(3000,()=>{
  console.log("服务启动成功...");
})

const socketio = require('socket.io')(server,{
  cors:{
    origin:'*'
  }
})

socketio.on('connection',(socket)=>{
  console.log("连接成功",socket.id);
  socket.on('chatMessage',(message)=>{
    console.log("接收到客户端消息",message);
    // 指定发送
    // socket.connected([socket.id]).emit('chatMessage',message.value)
    // 广播
    console.log(socket);
    socket.emit('chatMessage','给客户端返回消息')
  })

  // 关闭链接的时候执行
  socket.on('disconnect',()=>{
    console.log("有人关闭了");
  })
})

