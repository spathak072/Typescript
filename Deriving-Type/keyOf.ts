type User = { name: string; age: number; isActive: boolean };
type UserKeys = keyof User; // "name" | "age" | "isActive"
type UserKeyOf = keyOf<User>; // "name" | "age" | "isActive"
type UserKeyOf2 = keyOf<User, string>; // "name" | "age"
type UserKeyOf3 = keyOf<User, number>; // "age"
type UserKeyOf4 = keyOf<User, boolean>; // "isActive"
type UserKeyOf5 = keyOf<User, string | number>; // "name" | "age"
type UserKeyOf6 = keyOf<User, string | boolean>; // "name" | "isActive"
type UserKeyOf7 = keyOf<User, string | number | boolean>; // "name" | "age" | "isActive"
type UserKeyOf8 = keyOf<User, never>; // never
type UserKeyOf9 = keyOf<User, unknown>; // "name" | "age" | "isActive"
type UserKeyOf10 = keyOf<User, any>; // "name" | "age" | "isActive"
type UserKeyOf11 = keyOf<User, string | number | boolean | never>; // "name" | "age" | "isActive"
type UserKeyOf12 = keyOf<User, string | number | boolean | unknown>; // "name" | "age" | "isActive"
type UserKeyOf13 = keyOf<User, string | number | boolean | any>; // "name" | "age" | "isActive"

let validkeys: UserKeys = 'name'; // valid

function getPropertyOf<T extends object, U extends keyof T>(
  obj: T,
  key: U
): T[U] {
  const value = obj[key];

  if (value === undefined) {
    throw new Error(`Property ${key.toString()} does not exist on the object`);
  }
  return value;
}

const user: User = {
  name: "Alice",
  age: 30,
  isActive: true,
};
const keyOfUserName = getPropertyOf(user, "name"); // "Alice"
const userAge = getPropertyOf(user, "age"); // 30
const userIsActive = getPropertyOf(user, "isActive"); // true
const userInvalid = getPropertyOf(user, "invalidKey"); // Error: Property invalidKey does not exist on the object
const userName2 = getPropertyOf(user, "name" as UserKeys); // "Alice"
const userAge2 = getPropertyOf(user, "age" as UserKeys); // 30
const userIsActive2 = getPropertyOf(user, "isActive" as UserKeys); // true
const userInvalid2 = getPropertyOf(user, "invalidKey" as UserKeys); // Error: Property invalidKey does not exist on the object
const userName3 = getPropertyOf(user, "name" as keyof User); // "Alice"
const userAge3 = getPropertyOf(user, "age" as keyof User); // 30
const userIsActive3 = getPropertyOf(user, "isActive" as keyof User); // true    

const data = {
    id: 1,
    isStored: true,
    tags: ["tag1", "tag2"],
}

const tags = getPropertyOf(data, "tags"); // ["tag1", "tag2"]