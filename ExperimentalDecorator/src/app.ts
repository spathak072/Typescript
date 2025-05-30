function Logger(constructor: Function){
    console.log("Logger decorator called");
    console.log("Constructor:", constructor);
}

@Logger
class Person {
    name= "John Doe";
    constructor() {
        console.log("Creating Person instance");
        
    }
}

const pers = new Person();
console.log("pers",pers.name); // "John Doe"