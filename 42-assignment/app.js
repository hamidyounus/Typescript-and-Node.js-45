// Define the function to show magaicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// Define an array of magicians names
var magicians_names = ["Harry poter", "imran", "zain"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
