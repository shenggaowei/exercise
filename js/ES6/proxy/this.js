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
})();