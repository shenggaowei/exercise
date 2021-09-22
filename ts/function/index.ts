function gretter(fn: (a: string) => void) {
    fn('hello world')
}

function printToConsole(s: string) {
    console.log(s)
}

gretter(printToConsole)

type GreetFunction = (a: string) => void;

// 调用签名
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + "returned " + fn(6))
}

type someConstructor = {
    new(s: string): Record<string, unknown>
}

function firstElement<Type>(arr: Type[]): Type{
    return arr[0]
}

const s = firstElement<number>([2, 1, 1]);

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
    return arr.filter(func)
}

// overloads 函数重载 书写多个调用签名。函数的实现在最后。前两个成为重载签名(overloads signature)
/**
 * 函数实现的签名，无法调用
 * 函数实现的签名必须兼容所有的重载签名
 *  */ 
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date{
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp)
    }
}

