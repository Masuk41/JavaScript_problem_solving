// 1. How do default parameters work in js function
function total(price = 10, quantity) {
  return price * quantity;
}

console.log(total(undefined,3));
