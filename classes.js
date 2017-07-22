class Mammal {
    constructor(name) {
        this._name = name; // _ for private variables, prevents infinite loop for getter/setter
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    static makeMammal(name) {
        return new Mammal(name);
    }

    getInfo() {
        return `${this.name} is a mammal`;
    }
}

let monkey = new Mammal("George");
console.log(monkey.name);
monkey.name = "Bob";
console.log(monkey.name);

let chipmunk = Mammal.makeMammal("Alvin");
console.log(chipmunk.name);

////////////////////////////////////////////////////

// inheritance
class Marsupial extends Mammal {
    constructor(name, hasPouch) {
        super(name);
        this._hasPouch = hasPouch;
    }

    get hasPouch() {
        return this._hasPouch;
    }

    set hasPouch(hasPouch) {
        this._hasPouch = hasPouch;
    }

    // override methods
    getInfo() {
        return `${this.name} is a Marsupial`;
    }
}

let kangaroo = new Marsupial("Paul", true);
console.log(kangaroo.hasPouch);
console.log(kangaroo.getInfo());
console.log(chipmunk.getInfo());

/////////////////////////////////////////////////////

// dynamic inheritance
function getClass(classType) {
    if (classType === 1) {
        return Mammal;
    } else {
        return Marsupial;
    }
}

class Koala extends getClass(2) {
    constructor(name) {
        super(name);
    }
}

let carl = new Koala("Carl");
console.log(carl.getInfo());