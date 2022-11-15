const client = require("./dbconnection");

const getAircraft = (req, res)=> {
    client.query(`Select * from aircraft`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
};

module.exports = getAircraft;