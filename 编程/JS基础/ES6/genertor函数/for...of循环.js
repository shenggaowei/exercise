/**
 * return 值不会在for ...of 循环中被返回
 */
{
    function* foo(){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        return 5
    }
    for(let value of foo()){
        console.log(value)
    }
}

/**
 * generator函数实现斐波那契数列
 * 不需要使用next方法
 */
{
    function* fibonacci(){
        let [pre, cur] = [0,1]
        for(;;){
            yield cur;
            [pre,cur] = [cur,pre + cur];
        }
    }
    for(let value of fibonacci()){
        if(value >= 1000){
            break
        }
        console.log(value)
    }
}

//实现Object.entries
{
    function* objectEntries(obj){
        let keys = Object.keys(obj)
        for(let key of keys){
            yield [key, obj[key]]
        }
    }

    for(let [key,value] of objectEntries({a:'sheng',b:'gao'})){
        console.log([key,value])
    }
}

// 实现Object.entries 2
{
    function* objectEntries(){
        let keys = Object.keys(this)
        for(let key of keys){
            yield [key, this[key]]
        }
    }

    let info = {a:'sheng',b:'gao'}
    info[Symbol.iterator] = objectEntries
    for(let [key,value] of info){
        console.log([key,value])
    }
}

/**
 * 应用iterator对象的场景
 */
{
    function* numbers(){
        yield 1;
        yield 2;
        return
    }
    // 扩展运算符
    let r1 = [...numbers()]
    console.log(r1)

    // 解构赋值
    let [r21,r22] = numbers()
    console.log(r21,r22)

    // Array.from
    let r3 = Array.from(numbers())
    console.log(r3)

    // for...of
    for(let value of numbers()){
        console.log(value)
    }
}