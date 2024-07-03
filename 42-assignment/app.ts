// Define the function to show magaicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}

// Define an array of magicians names
let magicians_names = ["Harry poter", "imran", "zain"];

// Call make_great function to modify magicians names
let great_magicians = make_great(magicians_names);

// Call show_magicians that show modified list of magicians
show_magicians(great_magicians);