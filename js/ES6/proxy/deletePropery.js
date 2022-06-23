// 拦截 delete 操作，方法抛出错误或者返回 false，当前属性就无法被 delete 命令删除
// 注意，目标对象自身的不可配置（configurable) 的属性，不能被 deleteProperty 方法删除，否则报错
const handler = {
    deleteProperty(target, key) {
        invariant(key, 'delete');
        delete target[key]
        return true
    }
}

function invariant(key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`)
    }
}

const target = { _prop: 'foo' }
const proxy = new Proxy(target, handler)
delete proxy._prop