type StringArray = string[];

type ElementType<T extends any[]> = T[number];

type Element1 = ElementType<StringArray>; // string

let text = 1;

// type Example2 = ElementType<typeof text>; // number 

type GetElementType<T> = T extends any[] ? T[number] : never;
type Element2 = GetElementType<StringArray>; // string
type Element3 = GetElementType<typeof text>; // never

type FullnamePerson = {
    firstName: string;
    lastName: string;
}
type FullnameOrNothingPerson<T> = T extends FullnamePerson ? string : never;
function getFullName<T extends object>(person:T):FullnameOrNothingPerson<T> {
    if ("firstName" in person && "lastName" in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}` as FullnameOrNothingPerson<T>;
    }
    throw new Error("Person does not have firstName and lastName properties");
}

const name01 = getFullName({})
const name02 = getFullName({ firstName: "John", lastName: "Doe" }); // "John Doe"
const name03 = getFullName({ firstName: "Jane" }); // Error: Person does not have firstName and lastName properties
const name04 = getFullName({ lastName: "Doe" }); // Error: Person does not have firstName and lastName properties