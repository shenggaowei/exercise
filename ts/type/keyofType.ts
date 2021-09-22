type Point = { x: number; y: number };
// keyof produces a string or numeric literal union of its keys (产生一个字符串或者数字字面量枚举类型,值为执行对象的 key)
type P = keyof Point;
let a: P = "x";

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

let b: A = 33;

type Mapish = { [key: string]: boolean };
type M = keyof Mapish;

let c: M = "33";
