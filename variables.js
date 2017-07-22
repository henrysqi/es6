// let, const

// var is functional scoped
function makeVariable() {
    var thing = 5;
}
console.log(thing); 

function test1() {
    if (true) {
        var insideIf = 5;
    }
    console.log(5);
}
test1();

///////////////////////////////////////////////////////

// let is block scoped
function test2() {
    if (true) {
        let insideIf = 5;
    }
    console.log(insideIf) 
}
test2();

//////////////////////////////////////////////////////

//const is block scoped and is immutable
function test3() {
    const thing = 5;
    thing = 10;
}
test3();
