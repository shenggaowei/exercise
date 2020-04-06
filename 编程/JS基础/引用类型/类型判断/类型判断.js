let obj = { a: 1 };
let arr = [1];
let number = 1;
let func = function () {
    return 0
}
let reg = /^1/g;
console.log(func instanceof Function);

function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

function cloneDeep(data) {
    let basicData = ['number', 'string', 'boolean'];
    let ifBasic = basicData.some(ele => ele === typeof data);
    if (ifBasic) {
        return data
    }

    if (getType(data) === 'Object') {
        let temp = {};
        for (let key in data) {
            temp[key] = cloneDeep(data[key]);
        }
        return temp
    }

    if (getType(data) === "Array") {
        return data.map(ele => cloneDeep(ele))
    }
}

let date = new Date();
console.log(date.constructor)

let a = { a: 2, b: { c: 3 }, d: [1, 2, 3] }
let b = cloneDeep(a);
console.log(a, b);
a.b.c = 4;
b.d.push(4)
console.log(a, b);

// 基本类型
/**
 * typeof 操作符
 * 1 自定义构造函数会同一检测为 Object,无法根据构造函数的功能进行进一步的判断。
 */

// 引用类型
/**
 * instanceof 检测引用类型
 * 1. 变量与构造函数必须在同一个作用域中 如果变量定义在其他的 frame 中，在主框架中是无法进行检测的。需要进一步的尝试，没测出来。
 * 2. regExp 对象会被解析为 Object || RegExp。
 * 3. function 会被解析为 Object || Function
 *  */

/**
 * toString
 * Object.prototype.toString.call(value) 代用内部的 [class] 属性，指定了上述字符串中的构造函数名。
 * [object Array]
 * [object Function]
 * [object RegExp]
 * [object JSON]
 */

/**
 * constructor 判断其构造函数属性
 * Object || Array
 */

function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

function Son() {
    this.a = 'hah'
}

let son1 = new Son();

console.log(getType(son1))