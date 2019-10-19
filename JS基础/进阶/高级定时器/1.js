console.log('我是Node初始化时创建的服务');
console.log('啊哈哈');

setTimeout(function (diff) {
    console.log(diff);
    console.log('我是异步的函数1');
}, 1000)

var a = 1;
setTimeout(function () {
    console.log('我是异步的函数2', a);
}, 900)

console.log('我是同步的函数');

a = 2;