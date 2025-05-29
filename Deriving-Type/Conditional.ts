type StringArray = string[];

type ElementType<T extends any[]> = T[number];

type Element1 = ElementType<StringArray>; // string

let text = 1;

// type Example2 = ElementType<typeof text>; // number 

type GetElementType<T> = T extends any[] ? T[number] : never;
type Element2 = GetElementType<StringArray>; // string
type Element3 = GetElementType<typeof text>; // string