/**
 * 构造object的iterator接口
 */
class RangeIterator { 
  constructor(start, stop) { 
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { 
    return this
  }

  next() { 
    let value = this.value;
    if (value < this.stop) { 
      //让数据自增 value只取this.value的上一个值
      this.value ++
      return {
        value,
        done:false
      }
    }
    return {value:undefined,done:true}
  }
}

function range(start, end) { 
  return new RangeIterator(start,end)
}

for (let value of range(1, 3)) { 
  console.log(value)
}


function Obj(value) { 
  this.value = value;
  this.next = null;
}

//给object部署iterator接口
Object.prototype[Symbol.iterator] = function () { 
  var iterator = { next: next };
  var current = this;
  function next() { 
    if (current) {
      var value = current.value;
      current = current.next;
      return {
        done: false,
        value
      }
    } else { 
      return {
        done:true
      }
    }
  }

  return iterator
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (let j of one) { 
  console.log(j)
}

let obj = {
  data: ['hello', 'world'],
  [Symbol.iterator]() { 
    const self = this;
    let index = 0;
    return {
      next() { 
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          }
        } else { 
          return {done:true}
        }
      }
    }
  }
}

for (let m of obj) { 
  console.log(m)
}