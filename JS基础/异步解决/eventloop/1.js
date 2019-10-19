setTimeout(function () {
    console.log(1)
}, 0)

new Promise(function (resolve, reject) {
    setTimeout(function (params) {
        console.log(4);
        reject(2);
    }, 1000)
    console.log(3);
    resolve(6);
}).then(function (name) {
    console.log(name)
}, function (name) {
    console.log(name)
})

console.log(5);












function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
});
console.log('script end');
