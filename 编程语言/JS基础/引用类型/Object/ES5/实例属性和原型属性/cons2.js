function A() {

}

function B() {

}

let a = new A();
A.prototype = new B();

//__proto__ 为实例与构造函数的原型之间的引用。切断引用不会修改原来的引用。
console.log(a.constructor === A);
console.log(a.__proto__.__proto__ === B.prototype);
console.log(a instanceof A);
console.log(a instanceof B);