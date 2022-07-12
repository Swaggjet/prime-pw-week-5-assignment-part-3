console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
  let awesomeAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }
  collection.push(awesomeAlbum);
  return awesomeAlbum;
}

console.log('Adding album to collection:', addToCollection(
  'Cool people'
  , 'Mac Miller'
  , '2015',
  [ 
    {
      name: 'Intro',
      length: '3:00'
    },
    {
      name: 'I\'m a cool person',
      length: '3:00'
    },
  ]
)

console.log('Adding album to collection:', addToCollection(
  'Indigo'
  , 'Chris Brown'
  , '2019',
  [ 
    {
      name: 'Burgendy',
      length: '3:20'
    },
    {
      name: 'Il',
      length: '3:00'
    },
  ]



)
)