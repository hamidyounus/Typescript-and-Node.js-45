// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three function with different value
var album1 = make_album("imran", "Album title 1");
var album2 = make_album("zain", "Album title 2");
// Calling a make_aibum function with parametr
var album3 = make_album("sagar", "Album title 3", 10);
// printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
