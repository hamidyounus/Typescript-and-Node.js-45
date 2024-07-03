// Making a function
function make_shirt (size: string = "Large",printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}

// Calling a function with by-defualt values
make_shirt();

// Calling a funcyion now with Medium size and default meesage
make_shirt("Medium")

// Calling a function now with Small size and also Different print Message
make_shirt("Small", "I Love JavaScript")