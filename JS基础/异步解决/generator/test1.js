function* test1() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

let a = test1();
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())