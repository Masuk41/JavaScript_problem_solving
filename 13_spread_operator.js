// Spread Operator - three Dot(...) 
// Spread ... → spread/copy values into a new array/object.
//1.newArr = [...oldArr]
// 2.newObj = {...oldObj}

let cart = ["fruits", "rice"];
//we can use= cart.push("egg");

let cart2 = [...cart, "egg"];

// console.log(cart, cart2);

const personalInfo = {
  name: "Sana",
  age: 23,
};

const contactInfo = {
  email: "sana@jum.com",
  phone: "01755500000",
};

const fullProfile = {
  ...personalInfo,
  ...contactInfo,
  zip: "6000",
};

console.log(fullProfile);