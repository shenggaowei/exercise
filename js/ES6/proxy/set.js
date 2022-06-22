(() => {
    let validator = {
        set: function (obj, prop, value) {
            if (prop === 'age') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The age is not an integer')
                }
                if (value > 200) {
                    throw new RangeError('The age seems invalid')
                }
            }

            obj[prop] = value
            return true;
        }
    }

    let person = new Proxy({}, validator)
    person.age = 100;
    console.log(person.age)
    person.age = 'young'
    person.age = 300
});

(() => {
    const handler = {
        get(target, key) {
            invariant(key, 'get');
            return target[key]
        },
        set(target, key, value) {
            invariant(key, 'set')
            target[key] = value
            return true
        }
    }

    function invariant(key, action) {
        if (key[0] === '_') {
            throw new Error(`Invalid attempt to ${action} private "${key}" property`)
        }
    }

    const target = {}
    const proxy = new Proxy(target, handler)
    proxy._prop

    proxy._prop = "c"
});


(() => {
    const handler = {
        // receiver 指的是原始的操作行为所在的那个对象
        set: function (obj, prop, value, receiver) {
            obj[prop] = receiver;
            return true
        }
    }

    const proxy = new Proxy({}, handler);
    proxy.foo = 'bar'
    console.log(proxy.foo)
    console.log(proxy.foo === proxy)
});

(() => {
    // 原始的操作行为所在的对象是 obj。
    const handler = {
        set: function (obj, prop, value, receiver) {
            obj[prop] = receiver;
            return true
        }
    }
    const proxy = new Proxy({}, handler)
    const obj = {}
    Object.setPrototypeOf(obj, proxy)
    obj.foo = 'bar'
    console.log(obj.foo)
    console.log(obj.foo === obj)
});

(() => {
    const obj = {}
    Object.defineProperty(obj, 'foo', {
        value: 'bar',
        writable: false
    })

    const handler = {
        set: function (obj, prop, value, receiver) {
            obj[prop] = 'baz';
            return true
        }
    }

    const proxy = new Proxy(obj, handler)
    proxy.foo = 'baz'
    console.log(proxy.foo)
});

(() => {
    // 严格模式下，set 函数必须返回 true。非严格模式下，可返回 true，也可返回 false
    'use strict'
    const handler = {
        set: function (obj, prop, value, receiver) {
            obj[prop] = receiver
            return false
        }
    }
    const proxy = new Proxy({}, handler)
    proxy.foo = 'bar'
})();