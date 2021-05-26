function loggingIdentity(arg) {
    return arg;
}
var a = loggingIdentity([]);
console.log(a);
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3 };
var r3 = getProperty(x, "a");
var r4 = getProperty(x, "m");
console.log(r3, r4);
