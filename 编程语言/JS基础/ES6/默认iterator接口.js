{
    // 默认iterator接口
    const obj = {
        [Symbol.iterator]: function(){
            return {
                next: function(){
                    return { value:1, done:false }
                }
            }
        }
    }
}

{
    //数组默认拥有iterator接口
    let a = [1,2,3]
    let it = a[Symbol.iterator]()
    let r1 = it.next()
    let r2 = it.next()
    let r3 = it.next()
    console.log(r1,r2,r3)
}

{
    // 类添加iterator接口
    class RangeIterator{
        constructor(start,end){
            this.start = start;
            this.end = end;
        }
        [Symbol.iterator](){return this}
        next(){
            if(this.start <= this.end){
                return { value: this.start++, done:false }
            }
            return { value: undefined,done:true }
        }
    }

    function range(start,end){
        return new RangeIterator(start,end)
    }

    for(let value of range(1,5)){
        console.log(value)
    }

}

{
    // 用iterator模拟链表 
    /**
     * for of 循环
     * 1 执行Symbol.iterator获取遍历器对象
     * 2 不断执行遍历器对象next方法。直至done属性为true为止
     */
    class Obj{
        constructor(value){
            this.value = value
        }
        [Symbol.iterator](){
            let it = {next: next}
            let current = this
            function next(){
                if(current){
                    let result = {value: current.value, done: false}
                    current = current.next
                    return result
                }
                return { value: undefined,done:true }
            }
            return it
        }
    }
    let a = new Obj(1)
    let b = new Obj(2)
    let c = new Obj(3)
    a.next = b
    b.next = c
    for(let value of a){
        console.log(value)
    }
}

{
    //为一个对象添加一个iterator遍历器对象
    let obj = {
        data: ['hello','world'],
        [Symbol.iterator](){
            let index = 0
            let that = this;
            return {
                next:function(){
                    if (index <= that.data.length -1) {
                        return {
                            value: that.data[index++],
                            done: false
                        }
                    }
                    return {
                        value:undefined,
                        done: true
                    }
                }
            }
        }
    }
    for(let value of obj) {
        console.log(value)
    }
}

{
    // 给一个伪数组添加一个iterator接口
    NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]
    NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
    [...document.querySelectorAll('div')]
}

{
    let iterator = {
        0:0,
        1:1,
        2:2,
        length: 3,
        [Symbol.iterator]:function(){
            let index = 0
            let that = this;
            return {
                next: function(){
                    if (index < that.length) {
                        return { value: that[index++],done:false }
                    }
                    return { value:undefined,done: true }    
                }
            }
        }
    }
    for (let value of iterator){
        console.log(value)
    }
    let iterator2 = {
        0:0,
        1:1,
        2:2,
        length:3,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    }
    for (let value of iterator2){
        console.log(value)
    }
}