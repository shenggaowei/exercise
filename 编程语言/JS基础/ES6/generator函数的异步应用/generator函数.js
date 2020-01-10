// generator函数的数据交换
{
    function* gen(x){
        let y = yield x + 2;
        return y
    }
    let g = gen(1);
    let r1 = g.next().value;
    let r2 = g.next(5).value;
    console.log(r1, r2);
}

// generator函数的错误处理
{
    function* gen(x){
        try{
            var y = yield x + 2;
        }catch(e){
            console.log(e);
        }
        return y
    }
    let g = gen(1);
    g.next();
    g.throw('哈哈哈哈')
}

/*
* 异步任务的封装
* 缺点： 第一阶段和第二阶段的执行实际不能准确的把控，需要根据场景来分别处理
*/

{
    function* gen(){
        let api = 'https://api.github.com/users/github';
        let result = yield fetch(api);
        console.log(result)
    }

    let g = gen();
    g.value.then(data => data.json()).then(data => {
        g.next(data)
    })
}