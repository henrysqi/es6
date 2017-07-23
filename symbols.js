let symbol1 = Symbol(); // created with Symbol function
let symbol2 = Symbol("description of symbol2"); // Can be created with a descriptive string for debugging purposes

// symbols are always unique
let symbol3 = Symbol("description of symbol2");
console.log(symbol3 === symbol2);

// Symbols are a new primitive type in ES6
console.log(typeof symbol2);

// Cannot convert symbol to string, but can be reassigned
console.log("symbol: " + symbol2);
console.log("symbol: " + symbol2.toString());

//////////////////////////////////////////////
// one use case is unique property keys: symbol never clashes with another property key
let capital = Symbol("State capital");
console.log(`Symbol capital: ${capital.toString()}`)

let pennsylvania = {};
pennsylvania[capital] = "Harrisburg";
console.log(`Capital of PA: ${pennsylvania[capital]}`);

// share symbols with symbol for
let employNum = Symbol.for("Employee Number");
let bob = {};
bob[employNum] = 10;
let sally = {};
sally[employNum] = 11;
console.log(bob[employNum], sally[employNum]);