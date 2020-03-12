const net = require('net');
const events = require('events');
const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
// 监听join事件
channel.on('join', function(id, client){
    this.clients[id] = client;
    const welcome = `你是第${this.listeners('broadcast').length + 1}个用户`
    client.write(welcome)
    // 设置客户端订阅事件
    this.subscriptions[id] = function(senderId, data) {
        if(id != senderId) {
            this.clients[id].write(data);
        }
    }
    this.on('broadcast', this.subscriptions[id])
})

// 监听客户端的离开事件
channel.on('leave', function(id){
    channel.removeListener('broadcast',this.subscriptions[id])
    channel.emit('broadcast', id, id + 'has been leave')
})

// 用户输入shutdown事件后清除所有的监听者
channel.on('shutdown', function(){
    channel.emit('broadcast', '', 'i will be shutdown')
    channel.removeAllListeners()
})

// 超过十个node不会警告
channel.setMaxListeners(50);

const server = net.createServer(client => {
    const id = `${client.remoteAddress}:${client.remotePort}`;
    //用户加入，触发join事件
    channel.emit('join', id, client);
    //当socket中有数据时，触发广播事件
    client.on('data', data => {
        data = data.toString()
        // 如果socket中的数据是某关键字，则清除所有的监听者
        if (data === 'shutdown\r\n'){
            channel.emit('shutdown')
        }
        channel.emit('broadcast', id, data)
    })
    client.on('close', () => {
        channel.emit('leave', id)
    })
})

server.listen(8888)