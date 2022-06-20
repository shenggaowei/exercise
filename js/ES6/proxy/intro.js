(() => {
    const obj = new Proxy({}, {
        get: function (target, property, receiver) {
            console.log(`getting ${property}!`);
            return Reflect.get(target, property, receiver);
        },
        set: function (target, property, value, receiver) {
            console.log(`setting ${property}!`);
            return Reflect.set(target, property, value, receiver);
        }
    })
    obj.count = 1;

    ++obj.count
});

(() => {
    // 要使得 Proxy 起作用，必须针对 Proxy 实例进行操作，而不是针对目标对象进行操作
    const proxy = new Proxy({}, {
        get: function (target, propKey) {
            return 35
        }
    })
    console.log(proxy.time)
    console.log(proxy.name)
    console.log(proxy.title)
});

(() => {
    const target = {};
    const handler = {
        get: function (target, key) {
            console.log(`getting ${key}!`)
            return 35
        } 
    }
    const object = { proxy: new Proxy(target, handler)}
    object.proxy.a

    const proxy = new Proxy({}, {
        get: function (target, propKey) {
            return 35
        }
    })

    const obj2 = Object.create(proxy)
    console.log(obj2.time)
});

(() => {
    const handler = {
        get: function (target, name) {
            if (name === 'prototype') {
                return Object.prototype
            }
            return 'hello,' + name
        },

        // 拦截 proxy 实例作为函数调用的操作, 比如 proxy(...args)、proxy.call(obj, ...args)、proxy.apply(obj, args)
        apply: function (target, thisBinding, args) {
            return args[0] 
        },

        // 拦截 proxy 实例作为构造函数调用的结果，比如 new proxy(...args)
        construct: function (target, args) {
            return { value: args[1] }
        }
    }

    const fproxy = new Proxy(function (x, y) {
        return x - y
    }, handler)

    console.log(fproxy(1,2))
    console.log(new fproxy(1,2))
    console.log(fproxy.prototype === Object.prototype)
    console.log(fproxy.foo === "hello,foo")
})();