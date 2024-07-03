// Describe a function
function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling the function
describe_city("Multan");
describe_city("U S A", "Garmany");
