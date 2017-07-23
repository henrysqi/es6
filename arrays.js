// array creation
let array1 = Array.of(1,2,3);
console.log(array1);

// change object into array
let array2 = Array.from("word");
console.log(array2);

// use array-from to manipulate values
let array3 = Array.from(array1, (value) => value * 2);
console.log(array3);

// iterate over array with for-of
for (let val of array1) {
    console.log(val)
}