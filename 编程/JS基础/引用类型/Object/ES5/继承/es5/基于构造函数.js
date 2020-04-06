function Person() { 
  this.name = '升高';
  this.arr = [1,2,3,4];
}

Person.prototype.sayName = function () { 
  console.log('Person.prototype',this.name);
}

function Child() { 
  Person.call(this);
  this.age = 1;
}

let child1 = new Child();
let child2 = new Child();

console.log('child1.name', child1.name);
child1.sayName();
// 缺点 无法继承父类构造函数的原型对象的属性和方法