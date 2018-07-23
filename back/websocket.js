const WsServer = require('ws').Server;
const wss = new WsServer({                  
    port: 3031
});

wss.on('connection', (client) => {
    console.log('connected');

    //监听客户端向服务端发送消息
    client.on('message', (mess) => {
        console.log('test',mess);
        //向所有在线用户推送消息
        //做信息过滤
        wss.clients.forEach((item) => {
            item.send(mess)
        })
    })
})