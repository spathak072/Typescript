"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// ECMA Script Decorator
// Decorator are just JS Functions
function logger(target, ctx) {
    console.log("Logger Decorator called");
    console.log("Target:", target);
    console.log("Context:", ctx);
    // You can modify the target or add properties
    return class extends target {
        age = 30; // Adding a new property to the class
        constructor(...args) {
            super(...args);
            console.log("Logger Decorator: Constructor called");
            console.log("New instance created with age:", this);
        }
    };
}
function autoBind(target, ctx) {
    console.log("AutoBind Decorator called");
    console.log("Target:", target);
    console.log("Context:", ctx);
    ctx.addInitializer(function () {
        console.log("AutoBind: Initializer called for", this);
        this[ctx.name] = this[ctx.name].bind(this);
    });
    // Return a new function that binds 'this' to the original method
    return function () {
        return target.apply(this);
    };
}
// Target alway
function fieldLogger(target, ctx) {
    console.log("Field Logger Decorator called");
    console.log("Target:", target);
    console.log("Context:", ctx);
    // You can modify the target or add properties
    return (initialValue) => {
        console.log(initialValue);
        return "";
    };
}
let Person = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    var Person = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [autoBind];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Person = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = (__runInitializers(this, _instanceExtraInitializers), "Max");
        greet() {
            console.log(`Hello, ${this.name}`);
        }
    };
    return Person = _classThis;
})();
const person = new Person();
person.greet(); // Hello, Max
console.log("Person instance:", person); // Person instance: Person { name: 'Max', age: 30 }\
const max = person.greet;
max(); // Hello, undefined
