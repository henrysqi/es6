// set: list of values with no duplication
let randSet = new Set();
randSet.add(10);
randSet.add("word");
randSet.add("hellloooo");
randSet.add(2198);

// check if a set contains a value
console.log(randSet.has(10));

// get size of set
console.log(randSet.size);

// delete an item from set
randSet.delete(10);

// iterate over all values
for (let val of randSet) {
    console.log(val);
}