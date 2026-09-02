// reduce(), sort()

// 1.reduce()-combine in to one value

let products = [
  { title: "Laptop", price: 55000, inStock: true },
  { title: "Smartphone", price: 5000, inStock: false },
  { title: "Tablet", price: 18000, inStock: true },
  { title: "Smartwatch", price: 8000, inStock: true },
];

let total_price = products.reduce((initial_value, current_index) => {
  return (initial_value += current_index.price);
}, 0);
console.log(total_price);

// 2.// The sort() method rearranges the elements of an array in place and returns the sorted array. When sorting objects by a numeric property like price, a comparator function (a, b) determines the order.

// b.price -a.price = descending
// a.price -b.price = ascending
let sorted_price = products.sort((a, b) => b.price - a.price);

console.log(sorted_price);

let estimate = products
  .filter((p) => p.inStock == true)
  .reduce((acc, current) => {
    return (acc += current.price);
  },0);

console.log("total price:", estimate);
