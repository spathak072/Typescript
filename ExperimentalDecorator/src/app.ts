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

const pers = new Person();
console.log('pers', pers.name); // "John Doe"
