"use strict";
const names = []; // it's thesame as string[]
//names[0].split('');
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });
// promise.then((data) => {
//   //data.split('');
// });
// function merge<T, U>(obj1: T, obj2: U) {
//   return Object.assign({}, obj1, obj2);
// }
function merge(obj1, obj2) {
    //applying constraint
    Object.assign({}, obj1, obj2);
}
const mergedObj = merge({ user: 'Max' }, { age: 30 }); // we must assign an object as parameter
console.log(mergedObj);
function coundAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(coundAndDescribe('Hi There!'));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'Max' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Menu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
