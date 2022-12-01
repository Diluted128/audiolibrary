const {Client} = require('pg');

const db = new Client({
    host: "localhost",
    user: "ssi_user",
    port: 5433,
    password: "ssi_password",
    database: "audiolibrary"
});

module.exports = db