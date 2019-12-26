{
    // 模拟next方法返回值
    function makeIterator(arr){
        let nextIndex = 0;
        return {
            next: function(){
                let done = nextIndex < arr.length;
                return {
                    value: done ? arr[nextIndex++] : undefined,
                    done: !done
                }
            }
        }
    }
    let arr = [1,2]
    let it = makeIterator(arr)
    let r1 = it.next()
    let r2 = it.next()
    let r3 = it.next()
    console.log(r1,r2,r3)
}

{
    // 遍历器和数据是分开的，无限生成数据
    function idMaker(){
        let index = 0;
        return {
            next: function(){
                return {value: index++,done: false}
            }
        }
    }
    let it = idMaker();
    let r1 = it.next()
    let r2 = it.next()
    let r3 = it.next()
    console.log(r1,r2,r3)
}