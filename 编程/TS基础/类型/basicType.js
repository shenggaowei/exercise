//一 布尔值
var isDone = true;
// 可以表示十进制、十六进制、二进制和八进制
var decLiteral = 6;
//二 字符串
var currentName = 'bob';
//三 数组
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//元组
var x;
x = ['hello', 10];
// x = [10, 'hello']; // 报错
//四 枚举 可以手动赋值 不然自动叠加
var Color;
(function (Color) {
    Color[Color["Rdd"] = 0] = "Rdd";
    Color[Color["Gree"] = 5] = "Gree";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
var colorName = Color[6];
console.log(colorName); // Blue
console.log(typeof colorName); // string
//五 any 任何类型
var notSure = 4;
notSure = 'sure';
notSure = true;
var list3 = [1, true, 'free'];
list3[1] = 100;
//六 void 没有任何类型 只能设置 null 和 undefined
function warnUser() {
    console.log('哈哈哈');
}
var unusable = undefined;
//七 Null 和 Undefined，和 void 类似，他们本身的类型用处不是很大
// 默认情况下是所有类型的子类型
var u = undefined;
var n = null;
//八 never 类型
//返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
// create('string')
//十 类型断言
// 没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
var someValue = 'this is a string';
var strLength = someValue.length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的
var strLength2 = someValue.length;
