//creating a guest list array
let guestlist = ["imran","wara","sagar","jani","wajiha"];

//making variable for those guest who cant come
let dontcome = guestlist [0];

//print the name of guest who cant come
console.log(dontcome,"nahi aa sakte han");

//add or remove values from guest list array
guestlist.splice(0, 1, "array");

//message print for bigger table
console.log("good news i we have found a bigger table for dinner,");

//adding a new at string index of array
guestlist.unshift("rk");

//addind a new guest at ending index of array
guestlist .push("shazia");

//making varbile for storing a middle index of our guest list array
let middleindex : number = Math.floor (guestlist.length / 2);

//adding a new guest to middle index of array
guestlist.splice(middleindex, 0, "waris");

//print message of updated list 
console.log("updated list of our Guests");

//seading a invitation message to our guest one by one with their names
guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));