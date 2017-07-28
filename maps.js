// map: collection of key-value pairs, alternative to object literals
let randMap = new Map();

// enter in a value
randMap.set("key1", "Random String");
randMap.set("key2", 10);

// get values stored in map
console.log(randMap.get("key1"));
console.log(randMap.get("key2"));

// get map size
console.log(randMap.size);

// iterate
randMap.forEach((value, key) => {
    console.log(`${key}: ${value}`)
});

/////// from MDN:
// An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 can be bypassed by using map = Object.create(null), but is seldom done.
// The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
// You can get the size of a Map easily with the size property, while the size of an Object must be determined manually.

/////// This does not mean you should use Maps everywhere. If you're not sure which one to use, ask yourself the following questions:
// Are keys usually unknown until run time? Do you need to look them up dynamically?
// Do all values have the same type? Can they be used interchangeably?
// Do you need keys that aren't strings?
// Are key-value pairs frequently added or removed?
// Do you have an arbitrary (easily changing) number of key-value pairs?
// Is the collection iterated?