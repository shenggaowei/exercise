const handler = {
    setPrototypeOf(target, proto) {
        throw new Error("Changing the prototype is forbidden")
    }
}

const proto = {};

const target = function(){}
const proxy = new Proxy(target, handler)
Object.setPrototypeOf(proxy, proto)