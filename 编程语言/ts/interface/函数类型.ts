// 函数类型
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

interface SearchFuc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFuc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > 1
}

let mySearch1: SearchFuc;
mySearch1 = function (source, subString): boolean {
    let result = source.search(subString);
    return result > 1
}

let mySearch2: SearchFuc;
mySearch2 = function (source, subString) {
    let result = source.search(subString);
    return result > 1
}
