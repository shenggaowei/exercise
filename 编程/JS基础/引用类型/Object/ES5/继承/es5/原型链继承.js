function Person() { 
  this.name = '升高';
  this.arr = [1,2,3,4];
}

Person.prototype.sayName = function () { 
  console.log('Person.prototype',this.name);
}

function Child() { 
  this.age = 1;
}

Child.prototype = new Person();

let child1 = new Child();
let child2 = new Child();

child1.name = '升高啊'; 
console.log('child1.name', child1.name); // Child的prototype属性中获取
console.log('child2.name', child2.name); // //实例中的属性会覆盖掉原型中的属性。不会改变原型中的属性。

child1.arr.push(5);
console.log('child1.arr', child1.arr); //arr指针指向堆中的一处内存。通过指针修改内存，所有实例访问arr时，arr都会被取到更新后的值。
console.log('child2.arr', child2.arr); 
child1.sayName();