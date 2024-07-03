// Creating a Array
var userNames = ["Mahad", "Ali", "Imran", "Admin", "Usman"];
// Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like tosee a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank you for loggin in again."));
    }
});
