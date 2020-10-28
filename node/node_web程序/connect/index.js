const connect = require('connect')
const logger = require('./middleware/logger')
const errHandler = require('./middleware/error')

function hello(req,res){
    foo()
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
}

connect().use(logger(':method :url')).use(hello).use(errHandler).listen(3000)