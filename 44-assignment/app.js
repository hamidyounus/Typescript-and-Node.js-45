// Define a funvtion with a rest parameter that accept items arugments representing our sandwich
function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 different number of arguments
make_Sandwich("Chicken", "Cheese", "Mayo", "Egg");
make_Sandwich("Bread", "Butter");
make_Sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
