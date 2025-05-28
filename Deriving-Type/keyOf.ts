type User = {name: string, age: number, isActive: boolean};
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

let validkeys: UserKeys = "name"; // valid