const client = require('./dbconnection.js')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const port = 3507;

const queries = require('./queries');
app.listen(port, ()=>{
    console.log("Sever is now listening at port " + port);
})

client.connect();

app.get('/client/:id', queries.getClientByID); // ok zabezpieczone

app.get('/playlist/:id', queries.getPlaylistById); // poprawa, zabezpieczone

app.get('/playlists', queries.getAllPlaylists); // poprawa, zabezpieczone

app.get('/favourites', queries.getFavouritesTracksByUserId); // ok zabezpieczone

app.get('/artists', queries.getAllArtists); // poprawa

app.get('/artist/:id/albums', queries.getAllAlbumsByArtistId); // ok zabezpiczone

app.get('/album/:id/tracks', queries.getTrackByAlbumId); // poprawa

app.get('/playlist/:id/tracks', queries.getTracksByPlaylistId);

app.post('/login', queries.login); // ok zabezpieczone

app.post('/artist', queries.insertArtist); // ok zabezpieczone

app.post('/client/favourites', queries.postFavourites) // ok zabezpieczone

app.post('/playlist', queries.createNewPlaylist); // poprawa zabezpieczone

app.post('/playlist/:id/track', queries.postTrackInPlaylistOfSpecifiedId);

app.post('/album',  queries.postAlbum); // poprawa