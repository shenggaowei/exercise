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

Child.prototype = Person.prototype; 

let child1 = new Child();
let child2 = new Child();

console.log('child1.name', child1.name); 
child1.sayName();

child1.arr.push(5);
console.log('child1.arr', child1.arr);
console.log('child2.arr', child2.arr);

console.log(child1.constructor,Object.getPrototypeOf(child1).constructor);

/** 优点
 * 1 解决了调用两次父类实例的问题
 */

/**  缺点
 * 子类的构造器属性还是父类。
*/