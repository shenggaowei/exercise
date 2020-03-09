const EventEmitter = require('events').EventEmitter;
const channel = new EventEmitter();
channel.on('join', () => {
    console.log('welcome');
})

setTimeout(() => {
    channel.emit('join')    
}, 3000)
channel.emit('join')