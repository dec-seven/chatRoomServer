// 创建服务器用于监听端口 接受请求
 const http = require('http').createServer()
// 加载socket模块，获取socket.io对象
const socketio = reqire('socket.io')(http)

// 通过socketio监听客户端发送的请求
socketio.on('contenction',(socket)=>{
  console.log("有人来了",socket.id);
})

// 启动http服务器，监听3000端口
http.listen(3000, ()=>{
  console.log("服务器已启动...");
})