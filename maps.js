// map: collection of key-value pairs
let randMap = new Map();

// enter in a value
randMap.set("key1", "Random String");
randMap.set("key2", 10);

// get values stored in map
console.log(randMap.get("key1"));
console.log(randMap.get("key2"));

// get map size

// iterate
randMap.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})