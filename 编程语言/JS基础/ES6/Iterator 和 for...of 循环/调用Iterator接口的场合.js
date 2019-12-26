// 解构赋值
{
    // 1 对set解构进行解构
    let set = new Set().add(1).add(2).add(3)
    let [...list] = set
    console.log(list)
    
    // 2 对数组进行解构
    let arr = [1,2,3,4]
    let [...list2] = arr
    console.log(list2)
}

// 扩展运算符
{
    let str = 'shenggao'
    let arr = [...str]
    console.log(arr)

    let set = new Set().add(1).add(2).add(3)
    let arr2 = [...set]
    console.log(arr2)
}

// yield*
{
    let generator = function*(){
        yield 1;
        yield* [2,3,4]
        yield 5
    }

    for(let value of generator()){
        console.log(value)
    }

    let ge = generator()
    let r1 = ge.next()
    let r2 = ge.next()
    let r3 = ge.next()
    let r4 = ge.next()
    let r5 = ge.next()
    console.log(r1,r2,r3,r4,r5)

}