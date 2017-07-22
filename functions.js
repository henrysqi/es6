// default values
function getSum(num1 = 1, num2 = 1) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
getSum(4,4);
getSum(4);
getSum();

// default values are not in the arguments array
function getSum(num1 = 1, num2 = 1) {
    console.log(arguments[0]);
    console.log(arguments[1]);
}
getSum(4);

/////////////////////////////////////////////////////////

// rest parameters: ... treated as array
function getSum(...values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    console.log(`Sum is ${sum}`);
}
getSum(1,2,3,4);

// spread operator: spreads an array out
getSum(...[1,2,3,4,5]); // can also pass in arrays

function inspectArgs() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
inspectArgs(...[1,2,3,4,5]);

//////////////////////////////////////////////////////////////

// arrow functions
const getSum = (num1, num2) => num1 + num2;
getSum(5,9);

const doubleSum = (num1, num2) => {
    let sum = num1 + num2;
    return sum * 2;
}
doubleSum(5,9);

// arrow functions can be used as callbacks
let arr = [1,2,3,4,5,6];
let evens = arr.filter((elem) => elem % 2 === 0);
console.log(evens);

