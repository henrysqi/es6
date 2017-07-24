let fName = "John";
let lName = "Doe";
console.log("My name is " + fName + " " + lName);
console.log(`My name is ${fName} ${lName}`);

// can use javascript inside template literal
let num1 = 10;
let num2 = 5;
console.log(`10 * 5 = ${num1 * num2}`)

/////////////////////////////////////////////////////////////////////////////////

// tagged template literals: running a template string through a function
// tag: a function with the ability to interpret and process a template
function writeSomething(strings, ...values) { // rest parameter will be covered later
    // do stuff
    console.log(strings, values)
    let str = '';
    strings.forEach(function(string, i){
        str += string + (values[i] || '');
    });
    return str;
}

const name = "Joe";
const age = "40";
const result = writeSomething`There's a dude named ${name} and he is ${age} years old`;
console.log(result);

///////////////////////////////////////////////////////////////////////////

// multiline strings
let multiLine = `This is
a multiline
string.`;
console.log(multiLine);