/** 无限累加函数
 * sum(1,2,3).valueOf() 6
 * sum(2,3)(2).valueof() 7
 * sum(1)(2)(3)(4).valueOf() 10
 * sum(2)(4,1)(2).valueOf() 9
 */

 // 思路： 
 // 1. sum 函数对参数进行聚集。 2. valueOf 函数对聚集的参数进行累加。

function sum(...args) {
  const f = (...rest) => {
    return sum(...[...args, ...rest]);
  }
  f.valueOf = () => {
    return args.reduce((pre, next) => pre + next)
  }
  return f
}
 
const ret1 = sum(1, 2, 3).valueOf();
const ret2 = sum(2, 3)(2).valueOf();
const ret3 = sum(1)(2)(3)(4).valueOf();
const ret4 = sum(2)(4, 1)(2).valueOf();
console.log(ret1,ret2, ret3, ret4);