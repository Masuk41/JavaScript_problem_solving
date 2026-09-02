// rest_operator
//1. put things together = 1, 2, 3, 4 → [1, 2, 3, 4]
//collect/gather values
// | Operator     | Meaning                             | Example                       |
// | ------------ | ----------------------------------- | ----------------------------- |
// | `...` Rest   | Collect remaining values            | `function add(...numbers)`    |
// | `...` Rest   | Collect remaining object properties | `const {name, ...rest} = obj` |
// | `...` Rest   | Collect remaining array elements    | `const [a, ...rest] = arr`    |



// function
// 1.Rest in a function
function add(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}


console.log(add(10, 20, 30, 40, 50, 60)) 

//2. Rest with an object

const obj = {
  name: "tonmoy",
  age: 24,
  address: "rajshi",
  occupation: "Dhaka",
};

const { name, ...remaining } = obj;

// console.log(remaining);

// array

const arr = [1, 2, 3, 100, 200];

const [, , , ...rest] = arr;

// console.log(rest);

function something(one, ...remaining) {
  console.log(one, remaining);
}
console.log(something("first", 1, 2, 3, 4, 5, 6, 7));