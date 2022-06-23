// 拦截了 Object.defineProperty 方法，返回 false 只是用来提示操作失败
// 如果对象不可扩展， defineProperty 不能增加目标对象上不存在的属性
// 如果目标对象的某个属性不可写或不可配置，则 defineProperty 方法不得改变这两个设置
const handler = {
    defineProperty(target, key, descriptor) {
        return false
    }
}

const target = {}
const proxy = new Proxy(target, handler)
proxy.foo = 'bar'
console.log(proxy)