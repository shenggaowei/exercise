// 拦截对象自身属性的读取操作。具体来说，拦截以下操作。
// 1. Object.getOwnPropertyNames() 2. Object.getOwnPropertySymbols() 3. Object.keys() 4. for...in

(() => {
    let target = {a: 1, b: 2, c:3}
    let handler = {
        ownKeys(target) {
            return ['a']
        }
    }

    let proxy = new Proxy(target, handler)
    console.log(Object.keys(proxy))
});

(() => {
    let target = {
        _bar: 'foo',
        _prop: 'bar',
        prop: 'baz'
    }
    let handler = {
        ownKeys(target) {
            return Reflect.ownKeys(target).filter(key => key[0] !== '_')
        }
    }

    let proxy = new Proxy(target, handler)
    for (let key of Object.keys(proxy)) {
        console.log(target[key])
    }
});

(() => {
    let target = {
        a: 1,
        b: 2,
        c: 3,
        [Symbol.for('secret')] : '4'
    }

    Object.defineProperty(target, 'key', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: 'static'
    })

    let handler = {
        ownKeys(target) {
            return ['a', 'd', Symbol.for('secret'), 'key']
        }
    }

    let proxy = new Proxy(target, handler)
    console.log(Object.keys(proxy))
});

(() => {
    const p = new Proxy({}, {
        ownKeys: function (target) {
            return ['a', 'b', 'c']
        }
    })
    //getOwnPropertyNames，获取对象自身的属性，包括不可枚举的属性。但不能获取原型上的属性
    console.log(Object.getOwnPropertyNames(p))
});

(() => {
    const obj = { hello: 'world' };
    const proxy = new Proxy(obj, {
      ownKeys: function () {
        return ['a', 'b'];
      }
    });

    for (let key in proxy) {
      console.log(key); // 没有任何输出
    }
});

(() => {
   const obj = {};
   const p = new Proxy(obj, {
     ownKeys: function(target) {
      return [123, true, undefined, null, {}, []];
    }
   });
   Object.getOwnPropertyNames(p)
});

(() => {
// 如果包含不可配置(configurable 为 false) 的属性，该属性必须被 ownkeys() 方法返回，否则报错
const obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: true,
  value: 10 }
);

const p = new Proxy(obj, {
  ownKeys: function(target) {
    return ['b', 'a'];
  }
});

console.log(Object.getOwnPropertyNames(p))
});


(() => {
    // 如果目标对象是不可扩展的（non-extensible），这时ownKeys()方法返回的数组之中，必须包含原对象的所有属性，且不能包含多余的属性，否则报错
    var obj = {
        a: 1
      };
      
    Object.preventExtensions(obj);
      
    var p = new Proxy(obj, {
      ownKeys: function(target) {
        return ['a', 'b'];
      }
    });
     
    Object.getOwnPropertyNames(p)
})()