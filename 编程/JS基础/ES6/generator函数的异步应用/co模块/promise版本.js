let fs = require('fs');

function readFile(fileName){
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', function(err, data){
            if(err) throw err;
            resolve(data)
        })
    })
}

function* generator(){
    let path1 = __dirname + '/1.json';
    let path2 = __dirname + '/2.json';
    let r1 = yield readFile(path1);
    let r2 = yield readFile(path2);
    console.log(r1);
    console.log(r2);
}

function run(generator){
    let gen = generator();

    function next(err, data){
        let { value, done } = gen.next(data);
        if(done) return;
        value().then(next)
    }

    next()
}

run(generator);