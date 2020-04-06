
{
    // yield* 遍历遍历器
    let arr = [1, [[2, 3], 4], [5, 6]];
    function *flat(a){
        for(let i = 0; i < a.length; i++){
            let value = a[i]
            if (Array.isArray(value)){
                yield* flat(value)
            }else {
                yield value
            }
        }
    }
    for(let value of flat(arr)){
        console.log(value)
    }
}

{
    // yield 用在另一个表达式当中 必须放在括号中
    function* demo(){
        console.log('hello' + (yield 'world'))
    }
    let it = demo()
    console.log(it.next().value)
}

{
    let foo = function(){

    }
    // 用作函数参数或者放在赋值表达式的右边，可以不加括号
    function* demo(){
        foo(yield 'a',yield 'b');
        let foo = yield 'ok'
    }
}