// Define a funvtion with a rest parameter that accept items arugments representing our sandwich
function make_Sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleitem => console.log(singleitem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 different number of arguments
make_Sandwich("Chicken", "Cheese", "Mayo", "Egg");

make_Sandwich("Bread", "Butter");

make_Sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");