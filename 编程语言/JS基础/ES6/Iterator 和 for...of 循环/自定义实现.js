/**
 * 自定义实现iterator接口
 * @param {*} number 
 */
function makeIterator(arr) {
  var index = 0;
  return {
    next: function () {
      return index <= arr.length ? {
        value: arr[index++],
        done: false
      } : {
        value: undefined,
        done: true
      }
    }
  }
}

let case1 = makeIterator(['a', 'b'])
console.log(case1.next())
console.log(case1.next())
console.log(case1.next())

function Person(value) {
  this.value = value;
}

Person.prototype[Symbol.iterator] = function () {
  let current = this;
  return ({
    next
  });

  function next() {
    let result = {
      done: false,
      value: current.value
    }

    if (current) {
      current = current.next;
    } else {
      result.done = true;
    }


    return result
  }
}

let a = new Person(1);
let b = new Person(2);
let c = new Person(3);

a.next = b;
b.next = c;

for (let value of a) {
  console.log(value)
}