let names:Array<string> = ["max", "anna", "peter", "maria"];

type DataStore<T> ={
    [key: string]: T;
};

let store: DataStore<string | boolean> ={};

store.name = "test";
store.isEditor = false;

function merge<T, U>(a:T,b:U){
    return [a,b];
}

// const ids = merge<number, string>(1,"max");
const ids = merge<number, string>(1,"max");


// constrains in TS
function mergeObj<T extends object, U extends object>(a:T,b:U){
    return {
        ...a,
        ...b
    };
}

const mergedObj = mergeObj({name: "max"}, {age: 30});
console.log(mergedObj);

class User<T>{
    constructor(public id:T){}
}

const user = new User("i1")
user.id = "test";


