const client = require("./dbconnection");

const getAllArtistsQuery = async () => {
    var query = await client.query('Select * from Artist');
    return query;
}

const getAllTracksQuery = async () => {
    var query = await client.query('Select * from Tracks');
    return query;
}

const getAllAlbumsQuery = async () => {
    var query = await client.query('Select * from Album');
    return query;
}

const getArtistByIdQuery = async (id) => {
    var response = await client.query('SELECT * FROM Artist WHERE id=' + id);
    return response;
}

const getTrackByIdQuery = async (id) => {
    var response = await client.query('SELECT * FROM Track WHERE id=' + id);
    return response;
}

const getAlbumsByArtistIdQuery = async (id) => {
    var response = await client.query('SELECT * FROM Album WHERE artist_id=' + id);
    return response;
}

const getTracksByAlbumIdQuery = async (id) => {
    var response = await client.query('SELECT * FROM Track WHERE album_id=' + id);
    return response;
}

const pushToAlbumQuery = async (name, artist_id) => {
    return await client.query('INSERT INTO Album(name, artist_id) VALUES ("' + name + '",'+artist_id+')')
        .then((result) => console.log("success push new album to database"))
        .catch((err) => console.error("Failed push album to database"));
}

const getAllArtists = (req, res) => {
    getAllArtistsQuery().then((result) => {
        res.send(result.rows);
        console.log('Find all artists');
    }).catch((err) => {
        console.error(err.stack);
    })
    client.end();
}

const getAllTracks = (req, res) => {
    getAllTracksQuery().then((result) => {
        res.send(result.rows);
        console.log('Find all tracks');
    })
        .catch((err) => {
            console.error(err.stack);
        })
    client.end();
}

const getAllAlbums = (req, res) => {
    getAllAlbumsQuery().then((result) => {
        res.send(result.rows);
        console.log('Find all artists');
    })
        .catch((err) => {
            console.error(err.stack);
        })
    client.end();
}

const getArtistById = (req, res) => {
    getArtistByIdQuery(req.params.id)
        .then((result) => {
            res.send(result.rows);
            console.log("Find artist with id " + req.params.id);
        })
        .catch((err) => {
            res.sendStatus(404).json({'message': "Request error"})
        })
    client.end();
}

const getTrackByAlbumId = (req, res) => {
    getTracksByAlbumIdQuery(req.params.id)
        .then((result) => {
            res.send(result.rows);
            console.log("Find track with album_id " + req.params.id);
        })
        .catch((err) => {
            res.sendStatus(404).json({'message': "Request error"})
        })
    client.end();
}

const getTrackByArtistId = (req, res) => {
    getTrackByArtistId(req.params.id)
        .then((result) => {
            res.send(result.rows);
            console.log("Find track with artist_id " + req.params.id);

        })
        .catch((err) => {
            res.sendStatus(404).json({'message': "Request error"})
        })
    client.end();
}

const getTrackById = (req, res) => {
    getTrackByIdQuery(req.params.id)
        .then((result) => {
            res.send(result.rows);
            console.log("Find track with id " + req.params.id)
        })
        .catch((err) => {
            res.sendStatus(404).json({'message': "Request error"})
        })
}

const getAllAlbumsByArtistId = (req, res) => {
    getAlbumsByArtistIdQuery(req.params.id)
        .then((result) => {
            res.send(result.rows);
            console.log('Find all artists');
        })
        .catch((err) => {
            console.error(err.stack);
        })
}

const getArtistInfoById = (req, res) => {
    var response = getArtistByIdQuery(req.params.id)
        .then((result) => {
            console.log(result.rows)
            result.rows.forEach((row) => {
                getAlbumsByArtistIdQuery(row.id)
                    .then(result => {
                        console.log(result.rows)
                        result.rows.forEach((row) => {
                            getTracksByAlbumIdQuery(row.id)
                                .then((result) => {
                                    console.log(result.rows)
                                })
                                .catch((err) => {console.log(err.stack)})
                        })
                    })
                    .catch((err) => {console.log(err.stack)})
            })
        })
        .catch((err) => {
            console.log("not found" + err.stack)
        });
    res.sendStatus(404);
}

const postAlbum = (req, res) => {
    pushToAlbumQuery(req.body.name, req.body.artist_id)
        .then((result) => {
            console.log(result);
            res.sendStatus(200);
        })
        .catch(r => {
            console.log(r.stack);
            res.sendStatus(400);});
}

const queries = {
    getAllTracks,
    getAllArtists,
    getAllAlbums,
    getArtistById,
    getArtistInfoById,
    getTrackByAlbumId,
    getTrackByArtistId,
    getTrackById,
    getAllAlbumsByArtistId,
    postAlbum
}

module.exports = queries

