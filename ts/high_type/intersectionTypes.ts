// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}

interface Loggable {
    log(): void;
}

class ConsoleLogger extends Person implements Loggable {
    log() {
        console.log('我执行了');
        console.log(this.name);
    }
}

var jim = extend(new Person("Jim"), new ConsoleLogger("Bob"));
var n = jim.name;
jim.log()