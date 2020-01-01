{
    // 
    function * generator(){
        yield 'hello';
        yield 'world';
        return 'shenggao'
    }
    let it = generator()
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)
    for (let data of it){
        console.log(data)
    }
}

{
    function* foo(x) {
        var y = 2 * (yield (x + 1));
        var z = yield (y / 3);
        return (x + y + z);
    }
      
      var a = foo(5); 
     console.log(a.next().value) // 5 + 1 = 6,
     console.log(a.next().value) // NAN 继续上次暂停处执行，yield无返回值，即其值为undefined,相乘得y为nan，第二个 yield后面的值为nan。
     console.log(a.next().value) // NAN 继续上次暂停处执行，z为undefined, 5 + nan + undefined = nan
      
      var b = foo(5);
      console.log(b.next().value) // 6  x为5，第一个yield后面呢的值为 5+1
      console.log(b.next(12).value) // 8 第一个yield返回值为12,y = 2*12, 第二个yield后值为 24 / 3
      console.log(b.next(13).value) // 13 + 24 + 5 = 42 第二个yield返回值为13，即z为13，
}

{
    function* dataConsumer() {
        console.log('Started');
        console.log(`1. ${yield}`);
        console.log(`2. ${yield}`);
        return 'result';
      }
      
      let genObj = dataConsumer();
      genObj.next();
      // Started
      genObj.next('a')
      // 1. a
      genObj.next('b')
      // 2. b
}

{
    function wrapper(generatorFunction){
        return function(...rest){
            let generatorObj = generatorFunction(...rest)
            generatorObj.next()
            return generatorObj
        }
    }
    let wrapperFunction = wrapper(function* (){
        console.log('firstInput'+ (yield))
        console.log('secondInput' + (yield))
        return 'done'
    })
    wrapperFunction().next('shenggao')
    wrapperFunction().next('haha')
}

