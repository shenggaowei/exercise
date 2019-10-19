function Person() {
  this.name = '升高';
  this.arr = [1, 2, 3, 4];
}

Person.prototype.sayName = function () {
  console.log('Person.prototype', this.name);
}

function Child() {
  Person.call(this);
  this.age = 1;
}

//Object.create默认创建一个{},并将空对象的__proto__设置为所传的第一个参数。第二个参数为设置其数据属性或者访问器属性
//Child.prototype = Object.create(Person.prototype);
Child.prototype = Person.prototype;
Child.prototype.constructor = Child; //添加构造器属性

let child1 = new Child();
let child2 = new Child();

child1.sayName();

child1.arr.push(5);
console.log('child1.arr', child1.arr);
console.log('child2.arr', child2.arr);

console.log(child1.constructor, Object.getPrototypeOf(child1).constructor);

/** 优点
 * 1 解决了调用两次父类实例的问题
 * 2 解决了不能判断实例的构造函数是子类还是父类的问题
 */

/** es5和es6继承的区别
 * 1 es5先构建子类的this,然后将父类属性添加到当前this当中。
 * 2 es6先构建父类的this,然后将子类的属性添加到当前this当中。
 * 
 * */