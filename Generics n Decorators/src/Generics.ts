//const names: Array<string> = []; // it's thesame as string[]

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

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  //applying constraint
  Object.assign({}, obj1, obj2);
}

const mergedObj = merge({ user: 'Max' }, { age: 30 }); // we must assign an object as parameter
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function coundAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }

  return [element, descriptionText];
}
console.log(coundAndDescribe('Hi There!'));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
console.log(extractAndConvert({ name: 'Max' }, 'name'));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Menu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

//Generic utility

interface CourseGoal {
  title: string;
  description: string;
  completeUtil: Date;
}

//
function createCourseGoall(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUtil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'sports'];
//names.push('Menu');
