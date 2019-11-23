namespace V2{
    export interface Point{
        readonly x: number;
        readonly Y: number
    }

    let a:Point = {x:1,Y:2}
    a.Y = 3 // error
}

namespace V3{
    let a: number[] = [1,2,3,4]
    let ro:ReadonlyArray <number> = a;
    ro[0] = 12 //error
    ro.push(5) //error
    ro.concat(6) //ok 不改变原数组
    ro.length = 100 //error
    //error 将ro指针指向a a并不是只读数组 因此修改a，也就修改了ro。所以报错。如果a也是ReadonlyArray，则可以修改指针。
    a = ro  
    //类型断言 ok
    a = ro as number[]
}

