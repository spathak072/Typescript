// ECMA Script Decorator
// Decorator are just JS Functions
function logger<T extends new (...args:any[])=>any>(target: T, ctx: ClassDecoratorContext) {
  console.log("Logger Decorator called");
  console.log("Target:", target);
  console.log("Context:", ctx);
    // You can modify the target or add properties
    return class extends target {
        age= 30; // Adding a new property to the class
        constructor(...args: any[]) {
            super(...args);
            console.log("Logger Decorator: Constructor called");
            console.log("New instance created with age:", this);
        }
    }
    
}

function autoBind(target:(...args:any[])=>any, ctx: ClassMethodDecoratorContext) {
    console.log("AutoBind Decorator called");
    console.log("Target:", target);
    console.log("Context:", ctx);
    ctx.addInitializer(function (this:any) {  // run after initializtion with class constructor
        console.log("AutoBind: Initializer called for", this);
         this[ctx.name] = this[ctx.name].bind(this);
    })
    // Return a new function that binds 'this' to the original method
    return function(this:any) {
        return target.apply(this);
    }
    
}

// Target alway
// function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
//     console.log("Field Logger Decorator called");
//     console.log("Target:", target);
//     console.log("Context:", ctx);
//     // You can modify the target or add properties
//      return (initialValue:any)=>{
//         console.log(initialValue);
//         return ""
        
//             };
// }

function replacer<T>(value:T){
    return function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
        console.log("Field Logger Decorator called");
        console.log("Target:", target);
        console.log("Context:", ctx);
        // You can modify the target or add properties
         return (initialValue:any)=>{
            console.log(initialValue);
            return value
            
                };
    };
}

@logger
class Person {
    @replacer("Saurabh")
    name = "Max";
    @autoBind
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const person = new Person();
person.greet(); // Hello, Max

console.log("Person instance:", person);        // Person instance: Person { name: 'Max', age: 30 }\

const max = person.greet;

max(); // Hello, undefined

