let guy = {
    name: "John Doe",
    age: "75",
    location: "SF"
}
// object destructoring
let {name, age} = guy;
console.log(name); // same as let name = guy.name
console.log(age);

///////////////////////////////////////////////////////

// array destructoring
let nums = [1,2,3,4];
let [first, , , last] = nums;
console.log(first); // same as let first = nums[0]
console.log(last);

// can use spread operator with destructuring
let [, ...lastNums] = nums;
console.log(lastNums);

// value switching
let val1 = 1, val2 = 2, val3 = 3;
[val1, val2, val3] = [val3, val2, val1];
console.log(val1, val2, val3);