
// 遍历器构造函数 改为generator
{
    var obj = {}
    obj[Symbol.iterator] = function*(){
        yield 1;
        yield 2;
        yield 3;
    }
    for(let value of obj){
        console.log(value)
    }
    console.log([...obj])
}

// 遍历器对象的[Symbol.iterator]方法的执行返回值为当前的遍历器对象
{
    function* gen(){

    }
    let g = gen();
    // 遍历器对象生成函数 =》 遍历器对象 =》 next() => {value: '', done: bool}
    console.log(g[Symbol.iterator]() === g)
}

/**
 * next 函数的返回值
 */
{
    function* gen(){
        for(let i = 0; true; i++){
            let reset = yield i;
            if(reset){
                i = -1
            }
        }
    }
    let g = gen();
    let r1 = g.next().value // 0
    let r2 = g.next().value // 1 
    let r3 = g.next(true).value // 0
    console.log(r1,r2,r3)
}

{
    function* foo(x) {
        var y = 2 * (yield (x + 1));
        var z = yield (y / 3);
        return (x + y + z);
    }
      
      var a = foo(5);
      a.next() // 
      a.next() 
      a.next() 

      var b = foo(5);
      b.next() 
      b.next(12) 
      b.next(13) 
}