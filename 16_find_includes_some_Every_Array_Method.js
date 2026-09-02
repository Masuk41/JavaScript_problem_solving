// find(), includes(), some(), and every().

// forEach() → DO something
// map()     → TRANSFORM every item
// filter()  → SELECT multiple items
// find()    → FIND first matching item
// includes()→ CHECK if value exists
// some()    → CHECK if at least one matches
// every()   → CHECK if all match
// reduce()  → COMBINE into one value

// 1.find() — find the first matching item
let students = [
  { name: "Sakib", marks: 90 },
  { name: "Nayeem", marks: 55 },
  { name: "Hasan", marks: 75 },
];

let result = students.find((f)=> f.marks>60 )

console.log(result); //{ name: 'Sakib', marks: 90 }

// can not see { name: "Hasan", marks: 75 } this 
// if get the result then stop 



// 2.filter()find all the matching item

let fruits =["Apple","Banana","Mango", ]

let healthy_fruits = fruits.filter((fruits)=>    fruits.length<=5)
 console.log(healthy_fruits);

//  3.includes() — check whether a value exists

 let find1_fruits = fruits.includes("orange")
 let find2_fruits = fruits.includes("Banana")

 console.log(find1_fruits)//false
 console.log(find2_fruits)//true
 

