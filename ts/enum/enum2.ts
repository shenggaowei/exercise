enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: 1,
    radius: 100
}

console.log(c)

enum E {
    X, Y, Z
}

function f(obj: { Z: number }) {
    return obj.Z;
}

console.log(f(E));

// 反向映射
enum Enums {
    A, B
}
let a1 = Enums.B;
let key1 = Enums[a1];
console.log(key1);

const enum Enum {
    A = 1,
    B = A * 2
}