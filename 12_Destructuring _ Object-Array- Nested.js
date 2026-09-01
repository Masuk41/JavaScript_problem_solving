// // Destructuring means taking values out of an object or array and putting them into variables.

// // 1.Nested object destructuring

// const student = {
//   name: "Fahim Abdulla",
//   age: 29,
//   address: {
//     city: "Dhaka",
//     zip: 1212,
//   },
// };

// const {
//   name,
//   address: { city, zip },
// } = student;

// console.log(student);

// // 2. Array destructuring
// const arr = ["Red", "Green", "Black"];

// const [, , third] = arr;
// console.log(third);
// console.log(arr);


// 3.Nested object + array destructuring
const student2 = {
  name: "fahim",
  age: 20,
  address: {
    city: "Dhaka",
    zip: 1212,
  },
  hobbies: ["Gardening", "Painting"],
};

const {
  name: std2Name,
  address: { city: stdCity },
  hobbies: [firstHobby],
} = student2;

// console.log(firstHobby, stdCity);

const arr2 = ["test1", ["test100", "test300"]];

const [, [, test]] = arr2;

console.log(test);