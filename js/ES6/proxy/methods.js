// 1、get 方法拦截
(() => {
    const person = {
        name: '张三'
    }

    const proxy = new Proxy(person, {
        get: function (target, propKey) {
            if (propKey in target) {
                return target[propKey]
            } else {
                throw new ReferenceError(`prop name is not defined ${propKey}`)
            }
        }
    })

    console.log(proxy.name)
    proxy.age
});

// 2. get 方法实现继承
(() => {
  const proto = new Proxy({}, {
    get(target, key, receiver) {
      console.log('GET' + key);
      return target[key]
    }
  })

  const obj = Object.create(proto)
  obj.foo
});

// 3. get 拦截，实现数组读取负数的索引
(() => {
    function createArray(...elements) {
        const handler = {
            get(target, key, receiver) {
                let index = Number(key)
                if (index < 0) {
                    key = String(target.length + index)
                }
                return Reflect.get(target, key, receiver)
            }
        }
        let target = []
        target.push(...elements)
        return new Proxy(target, handler)
    }

    let arr = createArray('a', 'b', 'c')
    let ret = arr[0]
    console.log(ret)
});

// 4. 利用 get 实现链式操作
(() => {
    const pipe = function (value) {
        const funcStack = [];
        const proxy = new Proxy({}, {
            get: (object, fnName) => {
                if (fnName === 'get') {
                    return funcStack.reduce((val, fn) => {
                        const func = eval(fn)
                        return func(val)
                    }, value)
                }
                funcStack.push(fnName)
                return proxy
            }
        })
        return proxy
    }

    const double = n => n * 2
    const pow = n => n * n
    const reverseInt = n => n.toString().split('').reverse().join('') | 0
    let ret = pipe(3).double.pow.reverseInt.get
    console.log(ret)
});

// 5. 利用 get 拦截，实现一个生成各种 DOM 节点的通用函数 dom
(() => {
    const dom = new Proxy({}, {
        get(target, property) {
            return function (attrs = {}, ...children) {
                const el = document.createElement(property)
                for (let prop of Object.keys(attrs)) {
                    el.setAttribute(prop, attrs[prop])
                }
                for (let child of children) {
                    if (typeof child === 'string') {
                        child = document.createTextNode(child)
                    }
                    el.appendChild(child)
                }
                return el
            }
        }
    })
    
    const el = dom.div({},
        'Hello, my name is',
        dom.a({ href: '//example.com' }, 'Mark'),
        '. I like:',
        dom.ul({},
            dom.li({}, 'The web'),
            dom.li({}, 'Food'),
            dom.li({}, '...actually that\'s it')
        )
    )
    document.body.appendChild(el)
});

// 6 receiver
(() => {
    const proxy = new Proxy({}, {
        get: function (target, key, receiver) {
            return receiver
        }
    })
    const ret = proxy.getReceiver === proxy
    console.log(ret)
});

// 7 receiver 2
(() => {
    const proxy = new Proxy({}, {
        get: function (target, key, receiver) {
            return receiver
        }
    });
    const d = Object.create(proxy)
    d.a === d
});

// 8 configurable 和 writable 设置为 false，通过 proxy 进行访问会报错
(() => {
  const target = Object.defineProperties({}, {
      foo: {
          value: 123,
          writable: false,
          configurable: false
       }
  })
    const handler = {
      get(target, key) {
        return 'abc'
      }
    }
    const proxy = new Proxy(target, handler)
    proxy.foo
})()
