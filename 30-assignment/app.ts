// Creating a Array
let userNames = ["Mahad","Ali","Imran","Admin","Usman"];

// Using ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
console.log(`Hello ${oneUser}, would you like tosee a status report?`)
}else{
    console.log(`Hello ${oneUser},thank you for loggin in again.`)
}
})