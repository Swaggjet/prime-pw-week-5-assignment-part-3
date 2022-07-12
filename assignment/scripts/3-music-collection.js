console.log('***** Music Collection *****')
let collection = []; //create a varible to allow collection be an open array
function addToCollection(titles, artist, yearPublished){ //Set up a function and set the paramenters for the album

//set up a object 'album' to store the album information
  let album = {
    titles: titles,
    artist: artist,
    yearPublished: yearPublished
  }
  //
  collection.push(album);
return console.log('now added to the collection',  album.artist);
}

//Added music to the collection
addToCollection('Jazz', 'John Coltrane', '1958');
addToCollection('Kids', 'Kids', '2000');
addToCollection('Drake', 'Drake', '2016');
addToCollection('Time & Space', 'Kid Cudi', 2020)
addToCollection('Theory of Everything', 'Everything', '2001')
addToCollection(Black eye peas, 'Eminem', '2002')
console.log(collection);

function showCollection(array){
  console.log(array.length);
  for (let i = 0; i<array.length; i++){
    console.log('Album selected:',`${array[i].titles}, by ${array[i].artist}, published in ${array[i].yearPublished}`);
  }
}
showCollection(collection);



