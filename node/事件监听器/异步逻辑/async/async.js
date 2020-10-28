const async = require('async')
async.series([
    callback => {
        setTimeout(() => {
            console.log('i execute first')
            callback()
        }, 1000)
    },
    callback => {
        setTimeout(() => {
            console.log('i execute next')
            callback()
        }, 500)
    },
    callback => {
        setTimeout(() => {
            console.log('i execute last')
            callback()
        }, 100)
    },
])