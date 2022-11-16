const client = require("./dbconnection");

const getAircraft = (req, res) => {
    client.query(`Select * from track`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
};

const getAllArtist = (req, res) => {
    client.query('Select * from Artist')
        .then((result) => {
            res.send(result.rows);
            console.log('Find all artists')
        })
        .catch((err) => {
            console.error(err.stack);
        })
    client.end;
}

const getArtistById = (req, res) => {
    client.query('SELECT * FROM Artist WHERE id='+ req.params.id)
        .then((result) => {
            res.sendStatus(200).send(result.rows);
            console.log("Find artist with id " + req.params.id)
        })
        .catch((err) => {
            res.sendStatus(400).json({'message': "Bad request"});
            console.error(err.stack);
        })
    client.end;
}

const getAllTracksByArtistId = (req, res) => {
    client.query('SELECT * FROM Track WHERE artist_id=' + req.params.artistId)
        .then((result) => {
            res.sendStatus(200).send(result.rows);
        })
        .catch((err) => {
            res.sendStatus(400).send("Bad request");
            console.error(err.stack);
        })
    client.end;
}

const queries = {
    getAircraft,
    getAllArtist,
    getArtistById
}

module.exports = queries

