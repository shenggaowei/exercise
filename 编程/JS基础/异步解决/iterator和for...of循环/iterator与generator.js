
/**
 * case 1
 */
var myIterable = {};
myIterable[Symbol.iterator] = function* () { 
  yield 1;
  yield 2;
  yield 3;
}
console.log([...myIterable]);

let obj = {
  *[Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
}
for (let x of obj) { 
  console.log(x);
}