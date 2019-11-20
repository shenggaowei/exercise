function Person() { 
  this.name = '升高'
}

let info = { color: "绿色",constructor:Person };

Person.prototype = info;

let p1 = new Person();
for (let key in p1) { 
  console.log(key);
}

let result2 = Object.keys(p1);
console.log('Object.key', result2);
console.log('in', 'toString' in p1);

// Object.create 创建一个object 第一个参数是__proto__属性 第二个参数是访问器属性或者数据属性
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

let result3 = Object.getOwnPropertyNames(my_obj);
console.log('Object.getOwnPropertyNames', result3);

/**总计
 * for in 
 * 会遍历所有对象自身的，继承的，原型prototype中定义的，覆盖原型中不可枚举属性的属性。
 * 
 * Object.keys 只获取对象自身的可枚举的属性。获取不到原型中的属性。
 * 
 * Object.getOwnPropertyNames 获取对象自身的可枚举的以及不可枚举的属性。获取不到原型中的属性。
 * 
 * Object.hasOwnProperty 检测属性是否在实例中
 * 
 * in 检测对象是否存在某可枚举属性 或者从原型链上继承的属性。 无论他存在于实例中还是存在于原型中
 */

 /**原型链继承的属性
  * 
  * constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
  */