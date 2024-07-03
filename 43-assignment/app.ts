// Define the function to show magaicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry poter", "imran", "zain"];

// Making a copy of orginal array through  .slice() function
let copy_magician_names = magician_names.slice();

// Modify the copied array to include "The great" with thier names
let copy_great_magicians = make_great(copy_magician_names);

// Show both arrays original and copied

// Original
console.log("Original Array\n")
show_magicians(magician_names);

// Copied
console.log("/nCopied Array\n")
show_magicians(copy_great_magicians);

