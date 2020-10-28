{
    let it = {
        [Symbol.iterator]: function*(){
            yield 1
            yield 2
        }
    }
    let result = [...it]
    console.log(result)
}