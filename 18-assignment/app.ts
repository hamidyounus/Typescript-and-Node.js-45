//making a array countries and print is orginal order
let countriestovisit: string[] = ['china','pakistan','india','japan'];
console.log('orginal order:',  countriestovisit);

//print the array in Alphabetical order without modifying the actual array list
console.log("Alphabetical order", [...countriestovisit]);

//show that the Array is still in its orginal order
console.log("still in orginal order",countriestovisit);

//print the Array reversed order without modifying the Actual Array list
console.log("revers order",countriestovisit.reverse());

//show that array is still in its orginal order now
console.log("still in orginal order",countriestovisit);

//we have changed the orginal array order now
console.log("orginal Arrary reversed", countriestovisit.reverse());

//print the array to show that it's back to its orginal order
console.log("back to orginal order",countriestovisit.reverse());

//print the array to show that its order has been changed in alphabetical order me
console.log("sorted in Alphabetical order:", countriestovisit.sort());

//we have changed again the orginal Array order now in reverse order again
console.log("orginal array reversed",countriestovisit.reverse());