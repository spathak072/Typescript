function Logger(logString?: string): ClassDecorator {
    console.log('Logger factory called');   // First called
  return function (constructor: Function) {
    console.log('Logger called'); // Forth called
    console.log(logString);
    console.log('Constructor:', constructor);
  };
}

function withTemplate(template:string, hookId:string){
    console.log('withTemplate factory called'); // Second called
    return function(constructor: any){
        console.log('withTemplate called'); // Third called
        const element = document.getElementById(hookId);
        const p = new constructor();
        if (element) {
            element.innerHTML = template;
            element.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger("LOGGING-PERSON")
@withTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'John Doe';
  constructor() {
    console.log('Creating Person instance');
  }
}

// Property decorator
function Log(target:any, propertyName:string | symbol){
    console.log('Property decorator called');
    console.log('target:', target);  // The class prototype
    console.log('propertyName:', propertyName);  // The name of the property being decorated
}

// Access decorator
function Log2(target:any, name:string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator called');
    console.log('target:', target); // The class prototype
    console.log('name:', name); // The name of the method being decorated
    console.log('descriptor:', descriptor); // The property descriptor of the method
}

// Method decorator
function Log3(target:any, name:string, descriptor: PropertyDescriptor){
    console.log('Method decorator called');
    console.log('target:', target); // The class prototype
    console.log('name:', name); // The name of the method being decorated
    console.log('descriptor:', descriptor); // The property descriptor of the method
}

// Parameter decorator
function Log4(target:any, name:string | symbol, position:number){
    console.log('Parameter decorator called');
    console.log('target:', target); // The class prototype
    console.log('name:', name); // The name of the method being decorated
    console.log('position:', position); // The index of the parameter in the method
}
// Example usage of decorators on a class
// and its properties, methods, and parameters
// This example demonstrates how to use decorators in TypeScript
// to log information about the class and its members.
// The decorators log information about the class, properties, methods, and parameters.
class Product{
    @Log
    title: string;
    private _price: number;
    constructor(t: string, p: number) {
        this._price = p;
        this.title = t;
        console.log('Creating Product instance');
    }

    @Log2
    setPrice(price: number) {
        if (price < 0) {
            throw new Error('Invalid price - should be positive');
        }
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);

    }
}

const pers = new Person();
console.log('pers', pers.name); // "John Doe"
