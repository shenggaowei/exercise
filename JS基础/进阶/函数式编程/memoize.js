function memoize(f) {
    let cache = {};
    return function (param) {
        let key = JSON.stringify(param);
        cache[key] = cache[key] || f(param);
        return cache[key]
    }
}

function getTotal(n) {
    return n * 3
}

let func = memoize(getTotal);
console.log(func(1));
console.log(func(2));
console.log(func(3));
console.log(func(2));
console.log(func(1));
console.log(func(4));
