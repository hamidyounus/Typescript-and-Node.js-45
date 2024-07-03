// Array of Cuerrent Users
let current_users = ["usman", "ali", "areeba","zain","Osama"]

// Array of new Users
let new_users = ["imran", "ayesha", "Ali", "Mahad", "Areeba"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user =>{

    // Making a condition for username already exist and save in our_condition variale
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different messages using if-Else statments
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Usernames ${new_one_user} is avaiable`)
    }
})