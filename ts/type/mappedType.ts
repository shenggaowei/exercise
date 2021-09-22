type OnlyBoolsAndHorses = {
  [key: string]: boolean | string;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

let d: UnlockedAccount = {
  id: "33",
  name: "44",
};
d.name = "55";

// Capitalize<StringType> converts the first character in the string to an uppercase equivalent（首字母转成大写）
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;

// Uncapitalize<StringType> Converts the first character in the string to a lowercase equivalent
type UppercaseGreeting = "HELLO WORLD";
type uncomfortableGreeting = Uncapitalize<UppercaseGreeting>;

// Key Remapping via as.
// 重新定义，可以避免重复定义属性
type MappedTypeWithNewProperties<Type> = {
  [Properties in keyof Type as NewKeyType]: Type[Properties];
};

// in ts 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:
// 通过 as 语句重新定义 key 的值 property in keyof type。获取 mappedType 的每一个值
type Getter<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getter<Person>;

type stringProperty<Type> = Capitalize<string & Type>;

let e: stringProperty<string> = "33";

type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

type CloneTestMap<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: Type[Property];
};

type TestMap = CloneTestMap<{
  name: string;
  age: number;
}>;

let h: TestMap = {
  getName: "33",
  getAge: 33,
};

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: {
    format: "incrementing";
  };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

let i: ObjectsNeedingGDPRDeletion = {
  id: false,
  name: true,
};
