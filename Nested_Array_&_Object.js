1.
// let user ={
//     name:"Masuk",
//     Age:26,
//     address : {
// city :"Khulna",
// area:"guakhola",
// Zip_code :600,
// }
// }

 //=> . is used to go inside an object; [] can also access a property, but each level needs its own [].
 console.log(user.address)
 console.log(user["address"] ["city"])
 let entry =Object.entries(user);
 console.log(entry[0][1])


2.

let student = [{
    name:"Masuk",
    id:112
    
},

 {
    name:"Rana",
    id:132
    
},
 {
    name:"Mahjabin",
    id:133,
    address:{
        city:'khulna',
    zip:[878,832]
    }
    
},]

console.log(student[2].address.zip[1])