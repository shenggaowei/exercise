function Person() { 
  this.name = '升高';
  this.arr = [1,2,3,4];
}

Person.prototype.sayName = function () { 
  console.log('Person.prototype',this.name);
}

/**
 *继承父类的实例属性
 */
function Child() { 
  Person.call(this);
  this.age = 1;
}

Child.prototype = new Person(); // 内部__proto__可访问到Person.prototype

let child1 = new Child();
let child2 = new Child();

console.log('child1.name', child1.name); //现在child实例中去找。找到了，不去找原型
child1.sayName(); //实例属性找不到,从prototype对象中找。找不到通过__proto__去原型中去找

console.log(Object.getPrototypeOf(child1).constructor); //Person
/**  缺点
 * 1 父类构造函数调用了两次
 * 2 子类的构造函数属性显示不正确 
*/