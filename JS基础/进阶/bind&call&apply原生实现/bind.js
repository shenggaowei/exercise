let son1 = {
  getValue: function () {
    return this.value
  },
  value: '升高'
}

let son2 = {
  value: '升高2'
}


/** 1 用call实现 */
Function.prototype.bind3 = function () {
  const [context, ...params] = arguments;
  const self = this;
  return function () {
    return self.call(context, ...params);
  }
}


/**2 用apply实现 */
Function.prototype.bind4 = function () {

  const [context, ...params] = arguments;
  const self = this;
  return function () {
    return self.apply(context, [params]);
  }
}

/**3 自定义实现 */
Function.prototype.bind2 = function (context) {
  const arg = Array.prototype.slice.call(arguments, 1);
  let func = this;
  context.fn = this;
  return function () {
    //bind 可以传参数 注意参数的拼接
    const args = arg.concat(...arguments);
    //如果是new构造函数，this指向object新对象
    if (this !== global) {
      this.fn = func;
      context = this;
    }
    let result = context.fn(...args);
    delete context.fn;
    return result
  }
}

// let func = son1.getValue.bind4(son2);
// let result = func();
//console.log(result);

/**call和apply
 * 1 第二个参数不同。call是一个一个的，apply是一个数组
 * 2 注意作用域。箭头函数，或者提前声明获取执行函数this。
 */

/**考虑到构造函数的调用方式,this指向的是生成的obj */
function Person(name) {
  this.name = name
}

let obj = {
  name: "升高"
}

//用new操作符进行操作时，其this会指向window
let case1 = Person.bind2(obj);
let newObj = new case1('升高');
console.log(newObj);

//闭包
/**1
 * arguments是一个类数组对象，并不是一个真正的数组 只有索引和length属性 需要转换成真正的数组
 * 1 Array.prototype.slice.call(arguments);
 * 2 [].slice.call(arguments)
 * 3 Array.from(arguments); 有length和下标的伪数组
 * 4 [...arguments]
 */


let a = [1, 2, 3];

function b() {
  const [context, ...params] = arguments
  console.log(params, context)
}

b(1, 2, 3)