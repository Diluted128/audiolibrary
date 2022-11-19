const client = require('./dbconnection.js')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const port = 3502;

const queries = require('./queries');
app.listen(port, ()=>{
    console.log("Sever is now listening at port " + port);
})

client.connect();

app.get('/login', queries.login); // ok zabezpieczone

app.get('/client/:id', queries.getClientByID); // ok zabezpieczone

app.get('/playlist/:id', queries.getPlaylistById); // poprawa, zabezpieczone

app.get('/client/:id/favourites', queries.getFavouritesTracksByUserId); // ok zabezpieczone

app.get('/artists', queries.getAllArtists); // poprawa

app.get('/artist/:id/albums', queries.getAllAlbumsByArtistId); // ok zabezpiczone

app.get('/tracks', queries.getAllTracks); // poprawa

app.get('/track/:id', queries.getTrackById); // poprawa

app.get('/album/:id/tracks', queries.getTrackByAlbumId); // poprawa

app.post('/artist', queries.insertArtist); // ok zabezpieczone

app.post('/client/favourites', queries.postFavourites) // ok zabezpieczone

app.post('/playlist', queries.createNewPlaylist); // poprawa zabezpieczone

app.post('/album',  queries.postAlbum); // poprawa