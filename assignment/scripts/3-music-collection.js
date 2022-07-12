console.log('***** Music Collection *****')
let collection = []; //create a varible to allow collection be an open array
function addToCollection(titles, artist, yearPublished){ //Set up a function and set the paramenters for the album

//set up a object 'album' with the needed parameters needed within the object.
  let album = {
    titles: titles,
    artist: artist,
    yearPublished: yearPublished
  }
  //
  collection.push(album);
return console.log('now added to the collection',  album.artist);
}

