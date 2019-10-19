function Person() { 
  this.name = 'shenggao';
}

Person.prototype.sg = 'hh';
Person.prototype.toString = 'hh';

let child = new Person()
// for (let key in child) { 
//   console.log(key)
// }
console.log(Object.getOwnPropertyNames(Person.prototype))