/**
 * case 1
 */
var str = 'hello';
let a = [...str];
console.log(a)

/**
 * case 2
 */
let b = ['b', 'c'];
let bb = ['a', ...b, 'd'];
console.log(bb)

/**
 * case 3
 */
var someString = 'hi';
console.log(typeof someString[Symbol.iterator]);
//返回遍历器对象 有next方法
var iterator = someString[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

/**
 * case 4 覆盖string原始的iterator方法
 */
var str = new String('hi');
str[Symbol.iterator] = function () { 
  return {
    next: function () { 
      if (this._first) {
        this._first = false;
        return {
          value: "BOB",
          done: false
        }
      } else { 
        return {done:true}
      }
    },
    _first:true
  }
}
console.log(...str);
