"use strict";
// let age = 30;
// if (age > 20) {
//   var isOld = true;
//   console.log(isOld);
// }
// const add = (a: number, b: number) => a + b;
// console.log(add(2, 5));
// const printOutput = (output: number | string) => console.log(output);
// printOutput(add(2, 5));
const Hobbies = ['cooking', 'sport'];
const activeHobbies = ['Hiking', ...Hobbies];
console.log(activeHobbies);
const Person = {
    firstName: 'Max',
    age: '5',
};
const copyPerson = Object.assign({}, Person);
console.log(copyPerson);
//using rest function
const add = (...numbers) => {
    return numbers.reduce((currentNumber, currentValue) => {
        return currentNumber + currentValue;
    }, 0);
};
console.log(add(3, 5, 4, 6, 8, 3.2));
//destructuring
const [hoby1, hoby2] = Hobbies;
console.log(hoby1);
const { firstName: newName, age } = Person;
console.log(newName, age);
