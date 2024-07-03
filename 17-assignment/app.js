//creating a guest list array
var guestlist = ["imran", "wara", "sagar", "jani", "wajiha"];
//making variable for those guest who cant come
var dontcome = guestlist[0];
//print the name of guest who cant come
console.log(dontcome, "nahi aa sakte han");
//add or remove values from guest list array
guestlist.splice(0, 1, "array");
//message print for bigger table
console.log("good news i we have found a bigger table for dinner,");
//adding a new at string index of array
guestlist.unshift("rk");
//addind a new guest at ending index of array
guestlist.push("shazia");
//making varbile for storing a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//adding a new guest to middle index of array
guestlist.splice(middleindex, 0, "waris");
//print message of updated list 
console.log("updated list of our Guests");
//seading a invitation message to our guest one by one with their names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
//inform that only two guest can be invited for dinner
console.log("unfortunatly,the new dinner table wont arrive on time, so i can only invite two guest to dinner with me");
//using while_loop to remove guest form the array until only two names list
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("invitation to the last 2 Guest");
//Romoving last two Guest from the list
guestlist.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",you are still invited to dinner")); });
guestlist.pop();
guestlist.pop();
console.log("Empty list", guestlist);
