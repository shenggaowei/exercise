function A() {

}

function B() {

}

let a = new A();
A.prototype = {
  a: 1
}

console.log(a.constructor === A);
console.log(a.__proto__ === A.prototype);
console.log(a.constructor === A.prototype.constructor);
console.log(a instanceof A);