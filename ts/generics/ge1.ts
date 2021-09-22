// 范型接口
interface GenericIdentityFn<Type>{
    (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
    return arg
}

let myIdentity: GenericIdentityFn<number> = identity;

// keyof return a literal union of its keys
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }