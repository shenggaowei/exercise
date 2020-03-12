const fs = require('fs')
const Event = require('events')
const watchDir = 'watch'
const processDir = 'done'
class Watcher extends Event.EventEmitter{
    constructor(watchDir, processDir){
        super()
        this.watchDir = watchDir
        this.processDir = processDir
    }

    watch(){
        fs.readdir(this.watchDir, (err, files) => {
            if (err) { throw err }
            for(let index in files) {
                this.emit('process', files[index])
            }
        })
    }

    start(){
        fs.watchFile(this.watchDir, () => {
            this.watch()
        })
    }
}

const watch = new Watcher(watchDir, processDir)
watch.on('process', file => {
    const watchFile = `${watchDir}/${file}`
    const processFile = `${processDir}/${file}`
    fs.rename(watchFile, processFile, err => {
        if(err) { throw err }
    })
})

watch.start()