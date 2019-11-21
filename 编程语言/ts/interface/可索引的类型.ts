/**
 * ts 支持按照字符串和数字两种索引签名。
 * 可以同时使用两种类型的索引，但是由数字索引返回的值必须是字符串索引返回值类型的子集。(当使用number索引时，100 和 '100' 返回的数值是一致的)
 */

interface StringArray {
    [index: number]: string
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

/**
 * 当用 string 去检索 NumberDictionary 类型时，返回 number | string 类型
 * 访问 length（本身为 string 类型） 属性时，返回 number 类型。
 * 访问 name (本身为 string 类型) 属性时，返回 string 类型。
 */
interface NumberDictionary {
    [index: string]: number;

    length: number;
    name: string
}

/**
 * 将索引签名设置为只读，防止给索引赋值
 * number方式的索引 返回一个 string 类型。
 */
interface ReadOnlyArrayString {
    readonly [index: number]: string;
}

let myArray2: ReadOnlyArrayString = ['haha', 'heh'];
myArray2[2] = 'ddd';

