const client = require("./dbconnection");

const getAircraft = (req, res)=> {
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
            res.send(result.rows);
            console.log("Find artist with id " + req.params.id)
        })
        .catch((err) => {
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

