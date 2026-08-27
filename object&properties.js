
let user ={
    name:"Masuk",
    Age:26,
    address : "Noapra"
}

console.log(user)
console.log(user.name)
//delete object
delete user.address;
console.log(user)

user.address = "Jessore";
user.address = {
city :"Khulna",
area:"guakhola",
}
console.log(user)

console.log(Object.entries(user))
console.log(`key  =${Object.keys(user)}`)
console.log(Object.keys(user))