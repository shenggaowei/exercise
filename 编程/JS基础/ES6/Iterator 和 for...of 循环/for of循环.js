{
    let arr = [1,2,3,4];
    for(let value of arr){
        console.log(value)
    }
    let obj = {}
    obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
    for(let value2 of obj) {
        console.log(value2)
    }
}

{
    // 数组的遍历器只返回具有数字索引的属性
    let arr = [1,2,3]
    arr.foo = '哈哈'
    for (let value of arr) {
        console.log(value)
    }
}

{
    let es6 = new Map()
    es6.set('sheng', 'sheng');
    es6.set('gao', 'gao');
    for(let data of es6){
        console.log(data)
    }
}

{
    let arr = [0,1,2,3]
    let it = arr.entries()
    for(let data of it) {
        console.log(data)
    }
}