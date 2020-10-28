Array.prototype.filter1 = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();
   
    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
   
    res.length = c; // shrink down array to proper size
    return res;
  };


let a = [1,2,3,4];
let b = a.filter1((ele,index) => {
    console.log(ele,index)
    if(ele === 2 || ele === 3){
        a.splice(index, 1)
        console.log(a)
        return true
    }
    return false
})

console.log(a,b)

 function avoidRepeat (arr) {
    return arr.reduce((pre, next) => pre.includes(Number(next)) ? pre : pre.concat(Number(next)), [])
  }

  let c = [0,1,2,3,4,5,6,"7",7,"6"]
  let b = [0,2,3,5,7]

  let result = avoidRepeat(c)
  console.log(result)