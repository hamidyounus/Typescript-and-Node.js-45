// Define a function to a car object with optional options...
function create_car(manufacturer, model, ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

// Add additional options to the car object
options.forEach(option => {
    let [key, value] = option.split(":");
    car[key. trim()] = value.trim();
});

return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota,", "corrolla", "color: Black", "Sunroof: True","year: 2024");

// Print the variable to ensure all the Information is stored correctly in the car object
console.log(my_car);