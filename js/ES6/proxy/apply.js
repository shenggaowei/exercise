// apply 方法拦截函数的调用
(() => {
    const handler = {
        apply(target, ctx, args) {
            return Reflect.apply(...arguments)
        }
    }
});

(() => {
    const target = function () {
        return 'I am the target'
    }

    const handler = {
        apply: function () {
            return 'i am the proxy'
        }
    }

    const p = new Proxy(target, handler)
    const ret = p()
    console.log(ret)
});

(() => {
    const twice = {
        apply(target, ctx, args) {
            return Reflect.apply(...arguments) * 2
        }
    }

    function sum(left, right) {
        return left + right
    }

    const proxy = new Proxy(sum, twice)
    const r1 = proxy(1, 2)
    const r2 = proxy.call(null, 5, 6)
    const r3 = proxy.apply(null, [7, 8])
    const r4 = Reflect.apply(proxy, null, [9, 10])
    console.log(r1, r2, r3, r4)
})();