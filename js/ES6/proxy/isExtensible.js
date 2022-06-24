// Object.isExtensible(p) 是否可以向p对象中添加属性
// 注意，该方法只能返回布尔值，否则返回值会被自动转为布尔值。 这个方法还有一个强限制，它的返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误。

(() => {
    const target = {}
    const p = new Proxy(target, {
        isExtensible: function (target) {
            console.log("called")
            return true
        }
    })
    Object.isExtensible(p)
    console.log(Object.isExtensible(p) === Object.isExtensible(target))
});

(() => {
    const p = new Proxy({}, {
        isExtensible: function (target) {
            return false
        }
    })

    Object.isExtensible(p)
})();