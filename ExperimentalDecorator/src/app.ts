function Logger(logString?: string): ClassDecorator {
  return function (constructor: Function) {
    console.log(logString);
    console.log('Constructor:', constructor);
  };
}

@Logger("LOGGING-PERSON")
class Person {
  name = 'John Doe';
  constructor() {
    console.log('Creating Person instance');
  }
}

const pers = new Person();
console.log('pers', pers.name); // "John Doe"
