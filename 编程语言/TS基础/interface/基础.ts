// 1. 只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的
// 2. 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
// 3. 可选属性 在属性后面加一个 ? 符号。代表该属性是可选的，用户可填可不填。
// 4. 只读熟悉 readonly。适用于对象属性。对象属性只能在对象刚刚创建的时候修改其值。在属性名前加上 readonly 来执行只读属性。
// 5. ReadonlyArray<T>。适用于变量。把所有可能改变原数组的方法全都去掉了，可以确保数组创建后再也不能被修改。
interface LabelledValue {
    label: string,
    name?: string,
    readonly age: number,

    [propName: string]: any
}

function printLabel(labelObj: LabelledValue) {
    console.log(labelObj.label);
}

let myObj = {size: 10, label: 'size 10 object', age: 18, body: 100};
printLabel(myObj);

// test ReadonlyArray readonly vs const
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12;
// ro.push(5);
// ro.slice(0);
// ro.length = 100;
// a = ro;

