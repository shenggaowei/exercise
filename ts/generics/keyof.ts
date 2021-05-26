function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: 'Jarid',
    age: 35,
}

let string: string[] = pluck(person, ['name']);
console.log(string);
