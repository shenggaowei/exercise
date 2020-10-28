const env = process.env.NODE_ENV || 'development'

function errHandler(err, req, res, next) {
    switch(env) {
        case 'development':
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(err))
            break
        default: res.end('server error')
    }
}

module.exports = errHandler