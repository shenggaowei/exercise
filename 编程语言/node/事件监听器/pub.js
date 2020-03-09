const net = require('net');
const events = require('events');
const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
// 监听join事件
channel.on('join', function(id, client){
    this.clients[id] = client;
    // 设置客户端订阅事件
    this.subscriptions[id] = function(senderId, data) {
        if(id != senderId) {
            this.clients[id].write(data);
        }
    }
    this.on('broadcast', this.subscriptions[id])
})

const server = net.createServer(client => {
    const id = `${client.remoteAddress}:${client.remotePort}`;
    //用户加入，触发join事件
    channel.emit('join', id, client);
    //当socket中有数据时，触发广播事件
    client.on('data', data => {
        data = data.toString()
        channel.emit('broadcast', id, data)
    })
})

server.listen(8888)