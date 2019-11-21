// 额外的属性检查 绕过的方法
// 1 字符串索引签名
// 2 类型断言
// 3 将一个对像赋值给了另一个变量

interface LabelledValue {
    label: string,
    name?: string,
    readonly age: number,

}

function printLabel(labelObj: LabelledValue) {
    console.log(labelObj.label);
}

printLabel({size: 10, label: 'size 10 object', age: 18} as LabelledValue);

