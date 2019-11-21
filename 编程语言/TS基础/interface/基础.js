function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: 'size 10 object', age: 18, body: 100 };
printLabel(myObj);
// test ReadonlyArray readonly vs const
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12;
// ro.push(5);
// ro.slice(0);
// ro.length = 100;
// a = ro;
