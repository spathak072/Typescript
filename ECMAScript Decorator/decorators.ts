// ECMA Script Decorator
// Decorator are just JS Functions
function logger<T extends new (...args:any[])=>any>(target: T, ctx: ClassDecoratorContext) {
  console.log("Logger Decorator called");
  console.log("Target:", target);
  console.log("Context:", ctx);
    // You can modify the target or add properties
    return class extends target {
        age= 30; // Adding a new property to the class
    }
    
}

@logger
class Person {
    name = "Max";

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const person = new Person();
person.greet(); // Hello, Max

console.log("Person instance:", person);        // Person instance: Person { name: 'Max', age: 30 }

