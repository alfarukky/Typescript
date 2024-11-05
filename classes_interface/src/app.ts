//type AddFn = (a: number, b: number) => number;
interface AddFn {
  (n1: number, n2: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(Phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 30;
  constructor(public n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(Phrase: string) {
    if (this.name) {
      console.log(Phrase + ' ' + this.name);
    }
    console.log('Hi!');
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there - I am');
