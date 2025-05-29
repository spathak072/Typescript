type Operations ={
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

type Results = {
    [Key in keyof Operations] : ReturnType<Operations[Key]>;
}

const mathOperations: Operations = {
    add: (a:number, b:number) => a + b,
    subtract: (a:number, b:number) => a - b
}

const results: Results = {
    add: mathOperations.add(5, 3), // 8
    subtract: mathOperations.subtract(5, 3) // 2
};
console.log(results.add); // 8
console.log(results.subtract); // 2
export {};
// The `Results` type maps the keys of `Operations` to their respective return types.
// In this case, `Results` will be equivalent to:
// type Results = {         
//     add: number;
//     subtract: number;
// }
//
// The `mathOperations` object implements the `Operations` interface, and the `results` object uses the `Results` type to store the results of the operations.
// The `results` object will have the same structure as `Results`, with the return types of the operations.
// This allows you to create a type-safe mapping of operation results based on the operations defined in the `Operations` interface.
// This approach is useful for creating a type-safe way to handle the results of various operations, ensuring that the types are consistent and predictable.
// This code demonstrates how to use mapped types in TypeScript to create a type that maps the keys of an interface to their respective return types.
// Mapped types are a powerful feature in TypeScript that allows you to create new types based on existing ones by transforming their properties.
// In this example, we define an `Operations` interface with two methods: `add` and `subtract`.
// We then create a `Results` type that maps the keys of `Operations` to their respective return types using a mapped type. 
// The `Results` type will have the same keys as `Operations`, but the values will be the return types of the corresponding methods.
// The `mathOperations` object implements the `Operations` interface, providing concrete implementations for the `add` and `subtract` methods.
// Finally, we create a `results` object that uses the `Results` type to store the results of the operations.
// The `results` object will have the same structure as `Results`, with the return types of the operations.
// This approach allows you to create a type-safe mapping of operation results based on the operations defined in the `Operations` interface.
// It ensures that the types are consistent and predictable, making it easier to work with the results of various operations in a type-safe manner.
// This code demonstrates how to use mapped types in TypeScript to create a type that maps the keys of an interface to their respective return types.
// Mapped types are a powerful feature in TypeScript that allows you to create new types based on existing ones by transforming their properties.
// In this example, we define an `Operations` interface with two methods: `add` and `subtract`.
// We then create a `Results` type that maps the keys of `Operations` to their respective return types using a mapped type.
// The `Results` type will have the same keys as `Operations`, but the values will be the return types of the corresponding methods.
// The `mathOperations` object implements the `Operations` interface, providing concrete implementations for the `add` and `subtract` methods.
// Finally, we create a `results` object that uses the `Results` type to store the results of the operations.       
// The `results` object will have the same structure as `Results`, with the return types of the operations.
// This approach allows you to create a type-safe mapping of operation results based on the operations defined in the `Operations` interface.
// It ensures that the types are consistent and predictable, making it easier to work with the results of various operations in a type-safe manner.
// This code demonstrates how to use mapped types in TypeScript to create a type that maps the keys of an interface to their respective return types.
// Mapped types are a powerful feature in TypeScript that allows you to create new types based on existing ones by transforming their properties.
// In this example, we define an `Operations` interface with two methods: `add` and `subtract`.         
// We then create a `Results` type that maps the keys of `Operations` to their respective return types using a mapped type.
// The `Results` type will have the same keys as `Operations`, but the values will be the return types of the corresponding methods.
// The `mathOperations` object implements the `Operations` interface, providing concrete implementations for the `add` and `subtract` methods.
// Finally, we create a `results` object that uses the `Results` type to store the results of the operations.
// The `results` object will have the same structure as `Results`, with the return types of the operations.
// This approach allows you to create a type-safe mapping of operation results based on the operations defined in the `Operations` interface.       
// It ensures that the types are consistent and predictable, making it easier to work with the results of various operations in a type-safe manner.