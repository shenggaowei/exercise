function compose(...funcs) {
    return function (data) {
        return funcs.reduce((pre, next) => {
            return next(pre)
        }, data)
    }
}

let obj = { a: 1 };

function transform1(params) {
    params.b = 2;
    return params
}

function transform2(params) {
    params.c = 3;
    return params
}

function transform3(params) {
    params.d = 4;
    return params
}

function transform4(params) {
    params.e = 5;
    return params
}

function transform4(params) {
    params.e = JSON.stringify(params.e);
    return params
}

let func1 = compose(transform4, compose(transform1, transform2, transform3));
let func2 = compose(transform1, compose(transform2, compose(transform3, compose(transform4))))
let result1 = func2(obj);
console.log(result1);