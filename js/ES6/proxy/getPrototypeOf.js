// 拦截获取对象原型

const proto = {}

const p = new Proxy({}, {
    getPrototypeOf(target) {
        return proto
    }
})

let ret = Object.getPrototypeOf(p) === proto
console.log(ret)