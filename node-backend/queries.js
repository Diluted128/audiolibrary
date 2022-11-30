const db = require("./dbconnection");
const security = require('./security')

const login = (req, res) => {
    const credentials = req.body;
    db.query(`SELECT * FROM CLIENT WHERE EMAIL = '${credentials.login}' AND PASSWORD = '${credentials.password}'`, (err, result) => {
        if(result.rows.length !== 0){
            res.status(200).json({status: 200, token: security.generateHash(result.rows[0].id.toString() + result.rows[0].email)});
        }
        else{
            res.status(401).json({status: 401, message: "Bad credentials"});
        }
    });
    db.end;
};

const getClientByID = (req, res) => {

    var authToken = req.header('authorization');
    authToken = authToken.substring(authToken.indexOf(' ') + 1);
    security.validateHash(authToken).then(value => {
        if(value){
            db.query(`SELECT * FROM CLIENT WHERE ID = ${req.params.id}`, (err, result) => {
                if(result.rows.length === 0){
                    res.status(400).json({status: 400, message: "There is no clients with provided id"});
                    return;
                }
                res.send(result.rows);
            });
        }
        else{
            res.status(400).json({status: 401, message: "Unauthorized"});
        }
    })
    db.end;
};

const insertArtist = (req, res)=> {
    const artist = req.body;

    if(typeof artist.id !== "number"  ||
        typeof artist.firstname !== "string" ||
        typeof artist.lastname !== "string" ||
        typeof artist.country !== "string" ||
        typeof artist.age !== "number" ||
        typeof artist.pseudonym !== "string"){
        res.status(400).json({status: 400, message: "Some of the parameters types are not valid"});
        return;
    }

    if(artist.id <= 0 || artist.age <= 0){
        res.status(400).json({status: 400, message: "Some of the number parameters are not in valid range"});
        return;
    }

    var authToken = req.header('authorization');
    authToken = authToken.substring(authToken.indexOf(' ') + 1);
    security.validateHash(authToken).then(value => {
        if(value){
            let insertArtist = `insert into artist(firstname, lastname, country, age, pseudonym)
                       values('${artist.firstname}', 
                              '${artist.lastname}', 
                              '${artist.country}', 
                              '${artist.age}',
                              '${artist.pseudonym}')`

            db.query(insertArtist, (err, result)=>{
                if(err){
                    throw err;
                }
                else{
                    res.status(200).json({status: 200, message: "Provided artist as been inserted"});
                }
            })
        }
        else{
            res.status(400).json({status: 401, message: "Unauthorized"});
        }
    })
    db.end;
}

const getTracksByPlaylistId = (req, res) => {
    var authToken = req.header('authorization');
    authToken = authToken.substring(authToken.indexOf(' ') + 1);
    security.validateHash(authToken).then(value => {
        if (value) {
            const query1 = `SELECT name FROM playlist WHERE id=${req.params.id}`;
            let playlist;
            db.query(query1, (err, result)=>{
                if (result.rows.length === 0) {
                    res.status(400).json({status: 400, message: "There is no playlists with provided id"});
                } else {
                    playlist = result.rows[0];
                }
            });

            const query2 = `SELECT t.title, t.type, t.views FROM playlist p JOIN track_playlist tp ON p.id=tp.playlist_id JOIN track t ON tp.track_id=t.id WHERE p.id=${req.params.id}`;
            db.query(query2, (err, result)=>{
                if (result.rows.length === 0) {
                    res.status(400).json({status: 400, message: "There is no playlists with provided id"});
                    return;
                } else {
                    let tracks = result.rows;
                    res.send({playlist, tracks});
                }
            });



        }
        else {
            res.status(400).json({status: 401, message: "Unauthorized"});
        }
    })

    db.end;
}

const postFavourites = (req, res) => {
    const trackId = req.body.id

    if (typeof trackId !== "number") {
        res.status(400).json({status: 400, message: "Some of the parameters types are not valid"});
        return;
    }

    var authToken = req.header('authorization');
    authToken = authToken.substring(authToken.indexOf(' ') + 1);
    security.validateHash(authToken).then(value => {
        if (value) {
            db.query('Select * from track where id =' + trackId)
                .then((result) => {
                    if (result.lenght !== 0) {
                        db.query(`insert into client_track(track_id, client_id)
                                  values (${value.id}, '${trackId}')`, (err, result) => {
                            if (err) {
                                throw err;
                            } else {
                                res.status(200).json({
                                    status: 200,
                                    message: "Added track with id " + trackId + ' to user favorites ' + value.id
                                });
                            }
                        })
                    } else {
                        res.status(400).json({status: 400, message: "there is no track with such id"});
                        return;
                    }
                })
        } else {
            res.status(400).json({status: 401, message: "Unauthorized"});
        }
        db.end;
    })
}

const getPlaylistById = (req, res) => {
    var authToken = req.header('authorization');
    authToken = authToken.substring(authToken.indexOf(' ') + 1);
    security.validateHash(authToken).then(value => {
        if(value){
            const query = `SELECT * FROM playlist WHERE id=${req.params.id}`;
            db.query(query, (err, result)=>{
                if(result.rows.length === 0) {
                    res.status(400).json({status: 400, message: "There is no playlists with provided id"});
                    return;
                } else {
                    res.send(result.rows);
                }
            });
        }
        else{
            res.status(400).json({status: 401, message: "Unauthorized"});
        }
    })

    db.end;
}

const postTrackInPlaylistOfSpecifiedId = (req, res) => {
    var authToken = req.header('authorization');
    authToken = authToken.substring(authToken.indexOf(' ') + 1);
    security.validateHash(authToken).then(value => {
        if (value) {
            // checking whether playlist exists
            const playlistId = req.params.id;
            const selectPlaylistQuery = `SELECT * FROM playlist WHERE id = '${playlistId}'`;
            db.query(selectPlaylistQuery, (err, result) => {
                if (!err) {
                    if (result.rowCount <= 0) {
                        res.status(400).json({status: 400, message: "There is no playlist with provided id"});
                    }
                } else {
                    throw err;
                }
            })

            //checking whether track exists
            const trackId = req.body.trackId;
            const selectTrackQuery = `SELECT * FROM track WHERE id = '${trackId}'`;
            db.query(selectTrackQuery, (err, result) => {
                if (!err) {
                    if (result.rowCount <= 0) {
                        res.status(400).json({status: 400, message: "There is no track with provided id"});
                    }
                } else {
                    throw err;
                }
            })

            // adding to database
            const insertQuery = `INSERT INTO track_playlist (track_id, playlist_id) VALUES ('${trackId}', ${playlistId});`;
            db.query(insertQuery, (err, result) => {
                if (!err) {
                    res.status(200).json({status: 200, message: "Track " + trackId + " has been inserted"});
                } else {
                    throw err;
                }
            });
        } else {
            res.status(400).json({status: 401, message: "Unauthorized"});
        }
    })

    db.end;
}

const getFavouritesTracksByUserId = (req, res) => {
    var authToken = req.header('authorization');
    authToken = authToken.substring(authToken.indexOf(' ') + 1);
    security.validateHash(authToken).then(value => {
        if(value){
            const query = `SELECT ct.track_id, t.title, t.type, t.views FROM client c JOIN client_track ct ON c.id=ct.client_id JOIN track t ON ct.track_id=t.id WHERE c.id=${req.params.id}`;
            db.query(query, (err, result)=>{
                if(result.rows.length === 0) {
                    res.status(400).json({status: 400, message: "There is no favourites tracks for user with provided id"});
                    return;
                } else {
                    res.send(result.rows);
                }
            });
        }
        else{
            res.status(400).json({status: 401, message: "Unauthorized"});
        }
    })

    db.end;
}

const createNewPlaylist = (req, res) => {
    var authToken = req.header('authorization');
    authToken = authToken.substring(authToken.indexOf(' ') + 1);
    security.validateHash(authToken).then(value => {
        if (value) {
            const playlistName = req.body.name;
            const clientId =  value.id;

            const querySelect = `SELECT * FROM playlist WHERE name = '${playlistName}' AND client_id = ${clientId}`;
            db.query(querySelect, (err, result) => {
                if (err) {
                    res.status(400).json({status: 400, message: "Bad request"});
                } else if (result.rows.length === 0) { // dodaj do bazy jesli nie instieje taka playlista
                    const queryInsert = `INSERT INTO playlist (name, client_id) VALUES ('${playlistName}', ${clientId});`;
                    db.query(queryInsert, (err, result) => {
                        if (!err) {
                            res.status(200).json({status: 200, message: "Playlist " + playlistName + " has been inserted"});
                        } else {
                            res.status(400).json({status: 400, message: "Bad request"});
                        }
                    });
                } else {
                    res.status(409).json({status: 409, message: "Playlist of specified name exists"});
                }
            })
        } else {
            res.status(401).json({status: 401, message: "Unauthorized"});
        }
    })

    db.end;
}

const getAllArtistsQuery = async () => {
    var query = await db.query('Select * from Artist');
    return query;
}

const getAllTracksQuery = async () => {
    var query = await db.query('Select * from Tracks');
    return query;
}

const getAllAlbumsQuery = async () => {
    var query = await db.query('Select * from Album');
    return query;
}

const getArtistByIdQuery = async (id) => {
    var response = await db.query('SELECT * FROM Artist WHERE id=' + id);
    return response;
}

const getTrackByIdQuery = async (id) => {
    var response = await db.query('SELECT * FROM Track WHERE id=' + id);
    return response;
}

const getAlbumsByArtistIdQuery = async (id) => {
    var response = await db.query('SELECT * FROM Album WHERE artist_id=' + id);
    return response;
}

const getTracksByAlbumIdQuery = async (id) => {
    var response = await db.query('SELECT * FROM Track WHERE album_id=' + id);
    return response;
}

const pushToAlbumQuery = async (name, artist_id) => {
    return await db.query('INSERT INTO Album(name, artist_id) VALUES ("' + name + '",'+artist_id+')')
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
    db.end();
}

const getAllTracks = (req, res) => {
    getAllTracksQuery().then((result) => {
        res.send(result.rows);
        console.log('Find all tracks');
    })
        .catch((err) => {
            console.error(err.stack);
        })
    db.end();
}

const getAllAlbums = (req, res) => {
    getAllAlbumsQuery().then((result) => {
        res.send(result.rows);
        console.log('Find all artists');
    })
        .catch((err) => {
            console.error(err.stack);
        })
    db.end();
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
    db.end();
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
    db.end();
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

module.exports = {
    getPlaylistById: getPlaylistById,
    getFavouritesTracksByUserId: getFavouritesTracksByUserId,
    createNewPlaylist: createNewPlaylist,
    getClientByID: getClientByID,
    insertArtist: insertArtist,
    login: login,
    postFavourites: postFavourites,
    getAllTracks: getAllTracks,
    getAllArtists: getAllArtists,
    getAllAlbums: getAllAlbums,
    getArtistById: getArtistById,
    getArtistInfoById: getArtistInfoById,
    getTrackByAlbumId: getTrackByAlbumId,
    getTrackById: getTrackById,
    getAllAlbumsByArtistId: getAllAlbumsByArtistId,
    postAlbum: postAlbum,
    postTrackInPlaylistOfSpecifiedId: postTrackInPlaylistOfSpecifiedId,
    getTracksByPlaylistId: getTracksByPlaylistId
};