// has 方法用来拦截 hasProperty 操作，不是 HasOwnProperty 操作，即判断对象是否具有某个属性时，这个方法会生效。
(() => {
    const handler = {
        has(target, key) {
            if (key[0] === '_') {
                return false
            }
            return key in target
        }
    }

    const target = {_prop: 'foo', prop: 'foo'}
    const proxy = new Proxy(target, handler)
    console.log('_prop' in proxy)
    console.log('prop' in proxy)
});

(() => {
    const obj = { a: 10 };
    // 让对象变得不可扩展，不能添加新属性
    Object.preventExtensions(obj)

    const p = new Proxy(obj, {
        has: function (target, prop) {
            return false
        }
    })

    console.log('a' in p)
});

(() => {
    // has 拦截对 for...in循环不生效
    const stu1 = {name: '张三', score: 59}
    const stu2 = {name: '李四', score: 99}

    const handler = {
        has(target, prop) {
            if (prop === 'score' && target[prop] < 60) {
                console.log(`${target.name}不及格`)
                return false
            }
            return prop in target
        }
    }

    let proxy1 = new Proxy(stu1, handler)
    let proxy2 = new Proxy(stu2, handler)

    console.log('score' in proxy1)

    console.log('score' in proxy2)

    for (let a in proxy1) {
        console.log(proxy1[a])
    }

    for (let b in proxy2) {
        console.log(proxy2[b])
    }
})();