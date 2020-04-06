let fs = require('fs');
let thunkify = require('thunkify');
let thunkRead = thunkify(fs.readFile);

function* generator(){
    let path1 = __dirname + '/1.json';
    let path2 = __dirname + '/2.json';
    let r1 = yield thunkRead(path1, 'utf8');
    console.log(r1);
    let r2 = yield thunkRead(path2, 'utf8');
    console.log(r2);
}

// 1 异步执行 通过回调不断的接收和交换程序的执行权
// firstValue.value((err, data) => {
//     if(err){
//         throw err;
//     }
//     let value = gen.next(data);
//     value.value((err,data) => {
//         if(err){
//             throw err
//         }
//         let value = gen.next(data)
//     })
// })

function next(gen,data){
    let { value, done } = gen.next(data);
    if(!done){
        value((err,data) => {
            next(gen,data)
        })
    }
    return
}

function run(generator){
    let gen = generator();
    function next(err,data){
        if(err) throw err;
        let { value, done } = gen.next(data);
        if(!done) value(next);
        return
    }
    next()
}

run(generator)