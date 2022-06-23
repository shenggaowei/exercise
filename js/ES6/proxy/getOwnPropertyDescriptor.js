// 拦截Object.getOwnPropertyDescriptor()
const handler = {
    getOwnPropertyDescriptor(target, key) {
        if (key[0] === '_') {
            return
        }
        return Object.getOwnPropertyDescriptor(target, key)
    }
}

const target = { _foo: 'bar', baz: 'tar' }
const proxy = new Proxy(target, handler)

console.log(Object.getOwnPropertyDescriptor(proxy, 'wat'))
console.log(Object.getOwnPropertyDescriptor(proxy, '_foo'))
console.log(Object.getOwnPropertyDescriptor(proxy, 'baz'))