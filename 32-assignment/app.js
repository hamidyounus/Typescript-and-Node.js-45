// Array of Cuerrent Users
var current_users = ["usman", "ali", "areeba", "zain", "Osama"];
// Array of new Users
var new_users = ["imran", "ayesha", "Ali", "Mahad", "Areeba"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variale
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different messages using if-Else statments
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Usernames ".concat(new_one_user, " is avaiable"));
    }
});
