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

/** 1 用call实现 */
Function.prototype.apply2 = function () {
  // 先把arguments转成真数组
  const [context, params = []] = arguments;
  return this.call(context, ...params);
}

let son1 = {
  getValue: function () {
    return this.value
  },
  value: '升高'
}

let son2 = {
  value: '升高2'
}
let result = son1.getValue.apply2(son2);
console.log(result);

/** 2 原生实现 */
Function.prototype.apply3 = function () {
  const [context, params = []] = arguments;
  context.fn = this;
  let result = context.fn(params);
  delete context.fn;
  return result
}

/**
 * apply参数传的是一个数组，但真实调用函数的时候，会把数组参数进行解构
 */

// 如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
let a = Array.apply3(null, {
  "0": '1',
  length: 1
});
console.log(a)

let son1 = {
  getValue: function () {
    return this.value
  },
  value: '升高'
}

let son2 = {
  value: '升高3'
}
let result = son1.getValue.apply3(son2);
console.log(result);

let test = {
  value: "1",
}

function getValue(value1, value2, value3) {
  console.log(value1, value2, value3)
}

getValue.apply(test, ['1', '2', '3'])