class Parent { 
  constructor() { 
    if (new.target !== Parent) { 
      console.log('本类只能通过继承获得调用');
    }
    this.name = '父亲'
  }
}

class Child extends Parent {
  constructor(name) { 
    super(name);
  }

  getName(){ 
    console.log(this.name)
  }
}
 
let children = new Child();
children.getName();

let a = [];
a.push(...["1", 2]);
console.log(a)