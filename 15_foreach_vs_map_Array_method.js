// foreach(()=>) vs Map(()=>) and filter

// 1

// foreach(current_value, current index) =>{ 
//console.log(forEach() is useful when you want to do something with each item, rather than create a new array.)  }

//1. foreach can't return
// return `${idx + 1} -> ${f}`;

// 2. Do something with the item but do not create a new item
// ex: console.log("Apple") //Apple

let myPeople =["Renu","Mamun","Moushi","Mahjabin"];
myPeople.forEach((current_value,current_index)=>{
console.log( `No change ${current_index + 1}== ${current_value}`)

})


// 2.map(()=>) turn each item into something new.

// use when i want a new array . create a new Array and return it .

let friend = ["Tonmoy","Abid","Emon"];
let newfriend=friend.map((current_value,current_index)=>{ 
     console.log(`Change ${current_index + 1}===${current_value}`)
    return current_value.toLocaleUpperCase()
}) 
 
console.log("Make them big:",newfriend)


// 3.
// filter() =>Check every item and keep only the items that satisfy a condition.


let fruits =["Apple","Banana","Mango","no"]

let healthy_fruits = fruits.filter((fruits)=>    fruits.length>5)
 console.log(healthy_fruits);