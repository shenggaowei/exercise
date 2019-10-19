/**
 * case 1
 */
const arr = ['red', 'green', 'blue'];
for (let v of arr) { 
  console.log(v)
}

const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);
for (let j of obj) { 
  console.log(j)
}

/**
 * for in 遍历key
 * for of遍历值
 */
var a = ['a', 'b', 'c', 'd'];
for (let m in a) { 
  console.log(m)
}
for (let n of a) { 
  console.log(n)
}

/**
 * 数组的遍历器接口只返回具有数字索引的属性
 * for of 循环不会返回数组arr的foo属性
 */
let arr = [3, 5, 7];
arr.foo = 'hello';
for (let i in arr) { 
  console.log(i);
}
for (let j of arr) { 
  console.log(j);
}