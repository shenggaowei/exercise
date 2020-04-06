function logger(format){
    const reg=/:(\w+)/g
    return function(req,res,next){
        const str = format.replace(reg, (match, pro) => {
            return req[pro]
        })
        console.log(str)
        next()
    }
}

module.exports = logger