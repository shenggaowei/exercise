interface LengthWise {
    length: number
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
    return arg;
}

let a = loggingIdentity([]);
console.log(a);

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3 };
let r3 = getProperty(x, "a");
let r4 = getProperty(x, "c");
console.log(r3, r4);

interface Empty<T> {
}

let x1: Empty<number>;
let x2: Empty<string>;

x1 = x2;

