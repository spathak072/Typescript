// ECMA Script Decorator
// Decorator are just JS Functions
function logger(target: any, ctx: ClassDecoratorContext) {
  console.log("Logger Decorator called");
  console.log("Target:", target);
  console.log("Context:", ctx);
    // You can modify the target or add properties
    
}

@logger
class Person {
    name = "Max";

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}