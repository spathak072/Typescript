"use strict";
let text = 1;
function getFullName(person) {
    if ("firstName" in person && "lastName" in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error("Person does not have firstName and lastName properties");
}
const name01 = getFullName({});
const name02 = getFullName({ firstName: "John", lastName: "Doe" }); // "John Doe"
const name03 = getFullName({ firstName: "Jane" }); // Error: Person does not have firstName and lastName properties
const name04 = getFullName({ lastName: "Doe" }); // Error: Person does not have firstName and lastName properties
