// Arrow function 
const total = (Banana,orange=20) =>{
let price = Banana + orange;
return price;
}

const customer =total(20,)

console.log(customer)

//2. single line Arrow
const add = (a,b)=>a+b ;

const sum =add(20,2)
console.log(sum)
// 2.1single line Arrow
const yourName=(name)=> `Hello ${name}`;


console.log(yourName('Rakib'))