for (var i = 0; i < 5; i++) {
    console.log(i);
}
//  1,2,3,4,5

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0)
}
// 5,5,5,5,5

for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000)
    })(i);
}
//0，1，2，3，4

for (var i = 0; i < 5; i++) {
    (function () {
        setTimeout(function () {
            console.log(i);
        }, 100)
    })(i);
}
//5,5,5,5,5

for (var i = 0; i < 5; i++) {
    setTimeout((function (i) {
        console.log(i);
    })(i), 1000)
}
// 0,1,2,3,4