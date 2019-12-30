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