var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: 1,
    radius: 100
};
console.log(c);
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    return obj.Z;
}
console.log(f(E));
// 反向映射
var Enums;
(function (Enums) {
    Enums[Enums["A"] = 0] = "A";
    Enums[Enums["B"] = 1] = "B";
})(Enums || (Enums = {}));
var a1 = Enums.B;
var key1 = Enums[a1];
console.log(key1);
