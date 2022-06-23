// construct 方法用来拦截 new 命令
// 必须返回一个对象，否则会报错
// 目标对象必须是函数，否则会报错
// construct 方法中的 this 指向 handler，而不是实例对象

(() => {
    const handler = {
        construct(target, args, newTarget) {
            return new target(...args)
        }
    }
});

(() => {
    const p = new Proxy(function () { }, {
        construct: function (target, args) {
            console.log('called:' + args.join(', '));
            return { value: args[0] * 10 }
        }
    })
    console.log(new p(1).value)
});

(() => {
    const p = new Proxy({}, {
        construct: function (target, arguments) {
            return {}
        }
    })

    new p()
});

(() => {
    const handler = {
        construct: function (target, args) {
            console.log(this === handler);
            return new target(...args);
        }
    }

    let p = new Proxy(function () { }, handler);
    new p() // true
})();