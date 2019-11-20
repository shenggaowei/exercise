let son1 = {
  getValue: function () {
    return this.value
  },
  value: '升高'
}

let son2 = {
  value: '升高2'
}
let result = son1.getValue.call(son2);
console.log(result)

/**
 * 自定义实现 call函数
 */

let son1 = {
  getValue: function () {
    return this.value
  },
  value: '升高'
}

let son2 = {
  value: '升高2'
}

Function.prototype.call2 = function () {
  const [context, ...params] = arguments;
  context.fn = this;
  let result = context.fn(...params);
  delete context.fn;
  return result;
}
let result2 = son1.getValue.call2(son2);
console.log(result2);

/** 思路说明
 * 1 将执行函数(this)绑定到所传作用域context上。
 * 2 执行函数获取函数返回值
 * 3 删除绑定在context上的函数。重要。保持context原来的样子。
 * 4 return返回值
 */