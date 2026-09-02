
// 1.optional_chaining (?.)
// Optional chaining (?.) lets you safely access a property when the property might not exist.


let user1 = {
  name: "Sakib",
  address: {
    city: "Khulna",
  },
};

let user2 = {
  name: "Nayeem",
//   no address 
};


console.log(user1.address.city)

// 4. Nullish Coalescing ??
console.log(user2?.address?.city?? "Dhaka" )



// ?? vs || in JavaScript

// Both are used to provide a default value, but they behave differently.

// 1. || — OR operator

// || uses the right side when the left side is falsy.

// ?? — Nullish coalescing operator

// ?? uses the right side only when the left side is null or undefined.





