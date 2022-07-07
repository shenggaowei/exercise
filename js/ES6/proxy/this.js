// 被代理之后，目标对象内部的 this 关键字会指向 Proxy 代理
(() => {
    const target = {
        m: function () {
            console.log(this === proxy)
        }
    };
    const handler = {}
    const proxy = new Proxy(target, handler)

    target.m()
    proxy.m()
});

(() => {
    const _name = new WeakMap();

    class Person {
        constructor(name) {
            _name.set(this, name)
        }
        get name() {
            return _name.get(this)
        }
    }

    const jane = new Person('Jane')
    console.log(jane.name)

    const proxy = new Proxy(jane, {});
    console.log(proxy.name)
});

(() => {
    const target = new Date()
    const handler = {}
    const proxy = new Proxy(target, handler)

    console.log(proxy.getDate())
});

(() => {
    const target = new Date('2015-01-01')
    const handler = {
        get(target, prop) {
            if (prop === 'getDate') {
                return target.getDate.bind(target)
            }
            return Reflect.get(target, handler)
        }
    }

    const proxy = new Proxy(target, handler)
    console.log(proxy.getDate())
});

(() => {
    const handler = {
        get: function (target, key, receiver) {
            console.log(this === handler)
            return 'Hello, ' + key;
        },
        set: function (target, key, value) {
            console.log(this === handler)
            target[key] = value;
            return true
        }
    }
    const proxy = new Proxy({}, handler)

    console.log(proxy.foo);
    proxy.foo = 1;
})();