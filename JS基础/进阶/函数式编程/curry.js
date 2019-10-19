/**
 * 科里化函数 curry
 * @param {科里化执行函数} fn 
 */
function curry(fn) {
    let arg1 = Array.prototype.slice.call(arguments, 1);
    return function () {
        let arg2 = Array.prototype.slice.call(arguments);
        let finalArgs = arg1.concat(arg2);
        return fn.apply(null, finalArgs);
    }
}

/**
 * 
 * @param {所要执行的函数} fn 
 * @param {fn 执行作用域} context 
 */
function bind(fn, context) {
    let arg1 = Array.prototype.slice.call(arguments, 2);
    return function () {
        let arg2 = Array.prototype.slice.call(arguments);
        let finalArgs = arg1.concat(arg2);
        return fn.apply(context, finalArgs)
    }
}

function add(num1, num2) {
    return num1 + num2;
}

let curriedFunc = curry(add, 1);
let result = curriedFunc(3);
