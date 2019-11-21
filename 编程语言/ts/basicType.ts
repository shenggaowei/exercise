//一 布尔值
let isDone: boolean = true;

// 可以表示十进制、十六进制、二进制和八进制
let decLiteral: number = 6;

//二 字符串
let currentName: string = 'bob';

//三 数组
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//元组
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello']; // 报错

//四 枚举 可以手动赋值 不然自动叠加
enum Color {
    Rdd, Gree = 5, Blue
}

let colorName: string = Color[6];
console.log(colorName); // Blue
console.log(typeof colorName);// string

//五 any 任何类型
let notSure: any = 4;
notSure = 'sure';
notSure = true;

let list3: any[] = [1, true, 'free'];
list3[1] = 100;

//六 void 没有任何类型 只能设置 null 和 undefined
function warnUser(): void {
    console.log('哈哈哈')
}

let unusable: void = undefined;

//七 Null 和 Undefined，和 void 类似，他们本身的类型用处不是很大
// 默认情况下是所有类型的子类型
let u: undefined = undefined;
let n: null = null;

//八 never 类型
//返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//九 Object
declare function create(o: object | null): void;

create({prop: 0})
create(null);
// create('string')

//十 类型断言
// 没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的
let strLength2: number = (someValue as string).length;







