var guestlist = ["imran", "kamran", "wara", "mpontaha"];
var dontCome = guestlist[0];
console.log(dontCome, "Nai Ahh skta");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, " , would u like dinner with me?")); });
