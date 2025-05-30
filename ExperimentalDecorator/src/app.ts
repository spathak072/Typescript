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

function Log(target:any, propertyName:string | symbol){
    console.log('Property decorator called');
    console.log('target:', target);
    console.log('propertyName:', propertyName);
}

class Product{
    @Log
    title: string;
    private _price: number;
    constructor(t: string, p: number) {
        this._price = p;
        this.title = t;
        console.log('Creating Product instance');
    }

    setPrice(price: number) {
        if (price < 0) {
            throw new Error('Invalid price - should be positive');
        }
        this._price = price;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);

    }
}

const pers = new Person();
console.log('pers', pers.name); // "John Doe"
