const client = require('./dbconnection.js')
const express = require('express');
const queries = require('./queries');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, () => {
    console.log("Sever is now listening at port 3000");
})

client.connect();

//const bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.get('/artists', queries.getAllArtists);
// app.get('/artist/:id', queries.getArtistInfoById);
app.get('/artist/:id/albums', queries.getAllAlbumsByArtistId);
app.get('/tracks', queries.getAllTracks);
app.get('/track/:id', queries.getTrackById);
app.get('/album/:id/tracks', queries.getTrackByAlbumId);
app.get('/artist/:id/tracks', queries.getTrackByArtistId);

app.post('/album', bodyParser.json(), queries.postAlbum);
