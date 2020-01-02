{
    let g = function* (){
        try{
            yield
        }catch(e){
            console.log('内部捕获', e)
        }
    }
    let i = g();
    i.next();
    try{
        i.throw(new Error('出错了'))
        i.throw('b')
    }catch(e){
        console.log('外部捕获',e)
    }
}

{
    // 内部没有try catch语句 将会被外部的catch捕获
    let g = function* (){
        while(true){
            yield;
            console.log('内部捕获', e)
        }
    }

    let i = g();
    i.next();
    try{
        i.throw('a')
        i.throw('b')
    }catch(e){
        console.log('外部捕获', e)
    }
}

{
    function* gen(){
        try {
          yield 1;
        } catch (e) {
          console.log('内部捕获');
        }
      }
      
      var g = gen();
      g.throw(1);
}