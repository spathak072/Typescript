"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["max", "anna", "peter", "maria"];
let store = {};
store.name = "test";
store.isEditor = false;
function merge(a, b) {
    return [a, b];
}
// const ids = merge<number, string>(1,"max");
const ids = merge(1, "max");
// constrains in TS
function mergeObj(a, b) {
    return {
        ...a,
        ...b
    };
}
const mergedObj = mergeObj({ name: "max" }, { age: 30 });
console.log(mergedObj);
