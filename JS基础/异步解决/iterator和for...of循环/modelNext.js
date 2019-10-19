
var it = makeIterator(['a', 'b']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) { 
  var nextIndex = 0;
  return {
    next: function () { 
      return nextIndex < array.length ? {
        value: array[nextIndex++],
        done: false
      } : {
          value: undefined,
          done:true
      }
    }
  }
}

function a() { 
  var a = 1;
  return {
    next: function(){
      return {
        a : a++
      }
    }
  }
}
let b = a();
console.log(a().next())
console.log(b.next())
console.log(b.next())