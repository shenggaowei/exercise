export type World = "world";
export type Greeting = `hello ${World}`;

export type EmailLocaleIDs = "welcome_email" | "email_heading";
export type FooterLocaleIDs = "footer_title" | "footer_sendoff";

export type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

export type Lang = "en" | "ja" | "pt";
export type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

export type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    callback: (newValue: any) => void
  );
};

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "wei",
  lastName: "gao",
  age: 17,
});

person.on("ageChanged", () => 0);
person.on("firstNameChanged", () => 0);
person.on("lastNameChanged", () => 0);

// intersection 交叉类型 key 是 string 的子类型并且是 type 的 key
type PropEventSourcePlus<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function makeWatchedObjectPlus<Type>(
  obj: Type
): Type & PropEventSourcePlus<Type>;

const person2 = makeWatchedObjectPlus({
  firstName: "wei",
  age: 26,
});

person2.on("firstNameChanged", (value) => {});
person2.on("ageChanged", (value) => {});
