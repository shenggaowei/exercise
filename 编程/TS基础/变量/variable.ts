//一 let
//二 const

//默认值
// ?代表非必传，否则代表着该项为必传项
function getWholeObject(wholeObject: { a: string, b?: number }) {
    let {a, b = 1001} = wholeObject;
}

//函数声明
type C = { a: string, b?: number }

function f({a, b}: C): void {

}

function f1({a = "", b = 0} = {}): void {

}



