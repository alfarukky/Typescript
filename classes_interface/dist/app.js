"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.n = n;
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(Phrase) {
        if (this.name) {
            console.log(Phrase + ' ' + this.name);
        }
        console.log('Hi!');
    }
}
let user1;
user1 = new Person();
user1.greet('Hi there - I am');
