// 1. How do default parameters work in js function
function total(price = 10, quantity) {
  return price * quantity;
}

console.log(total(undefined,3));

// 2.How Do void and Template Literals (``) Work in JavaScript?

function sayName(name){
   console.log(`Hello ${name}`)
}
sayName('Masuk')

// without Template using return

function sayName(name) {
    return "Hello " + name;
}
console.log(sayName("Masuk"));






















