//1. for loop
for(let i = 0;i<5;i++){
    console.log(`count ${i}`)
}

// 2. for loop with an array
let students = ["Masuk", "Rana", "Mahjabin"];

for (let i = 0; i < students.length; i++) {
  console.log("khabo:",students[i]);
  
}

// 3. while loop
let students = ["Masuk", "Rana", "Mahjabin"];
let i=0;
while(i<students.length){
     console.log("khabo:",students[i]);
     i++;
}
  

// 4. for of loop

let students = ["Masuk", "Rana", "Mahjabin"];

for(let name of students ){
    console.log(name)
}

5. for in loop

let user ={
    name:"Masuk",
    Age:26,
    address : "Noapra"
}

for(let data in user){
    console.log(data,":",user[data])
}

// 6.break
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// 7.continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}