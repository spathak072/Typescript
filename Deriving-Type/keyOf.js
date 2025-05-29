"use strict";
let validkeys = 'name'; // valid
function getPropertyOf(obj, key) {
    const value = obj[key];
    if (value === undefined) {
        throw new Error(`Property ${key.toString()} does not exist on the object`);
    }
    return value;
}
const user = {
    name: "Alice",
    age: 30,
    isActive: true,
};
const keyOfUserName = getPropertyOf(user, "name"); // "Alice"
const userAge = getPropertyOf(user, "age"); // 30
const userIsActive = getPropertyOf(user, "isActive"); // true
// const userInvalid = getPropertyOf(user, "invalidKey"); // Error: Property invalidKey does not exist on the object
const userName2 = getPropertyOf(user, "name"); // "Alice"
const userAge2 = getPropertyOf(user, "age"); // 30
const userIsActive2 = getPropertyOf(user, "isActive"); // true
const userInvalid2 = getPropertyOf(user, "invalidKey"); // Error: Property invalidKey does not exist on the object
const userName3 = getPropertyOf(user, "name"); // "Alice"
const userAge3 = getPropertyOf(user, "age"); // 30
const userIsActive3 = getPropertyOf(user, "isActive"); // true    
const data = {
    id: 1,
    isStored: true,
    tags: ["tag1", "tag2"],
};
const tags = getPropertyOf(data, "tags"); // ["tag1", "tag2"]
