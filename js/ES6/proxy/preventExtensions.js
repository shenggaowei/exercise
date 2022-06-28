// 只有 Object.isExtensible(proxy)为false，proxy.preventExtensions 才能返回 true，否则会报错
(() => {
    const proxy = new Proxy({}, {
      preventExtensions: function (target) {
        console.log('called')
        Object.preventExtensions(target)
        return true
      }
    });
    Object.preventExtensions(proxy)
})();