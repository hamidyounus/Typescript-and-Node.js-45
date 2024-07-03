// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks ?:number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

if (tracks !== undefined){
    album.tracks = tracks;
}

return album;

}

// Calling three function with different value

let album1 = make_album("imran", "Album title 1");

let album2 = make_album("zain", "Album title 2");

// Calling a make_aibum function with parameter
let album3 = make_album("sagar", "Album title 3", 10);


// printing the variables

console.log(album1);
console.log(album2);
console.log(album3);