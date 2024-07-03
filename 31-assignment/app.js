// Creating a Array
var userNames = ["Mahad", "Ali", "Imran", "Admin", "Usman"];
// Remove all values from our Array Now our Array is empty
userNames = [];
// if Statment for checking Lenght of our Array is empty?
if (userNames.length === 0) {
    console.log("Your Array in empty we need to find some users!");
}
else {
    // If Array is not empty Use fprEach Loop on Array      
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",thank you for loggin in again."));
        }
    });
}
