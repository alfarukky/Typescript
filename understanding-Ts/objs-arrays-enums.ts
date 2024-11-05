// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Faruk',
//   age: 25,
// };

//best way of writing

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
const person = {
  name: 'Faruk',
  age: 25,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};
// person.role = [3, 'baked', 'fruits'];
// person.role[1] = 25
let favouriteActivities: string[];

favouriteActivities = ['dancing', 'sleeping'];

for (const hobby of person.hobbies) {
  console.log(hobby);
}
//console.log(person.name);
if (person.role === Role.ADMIN) {
  console.log(Role.ADMIN);
}
