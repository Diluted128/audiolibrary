const {Client} = require('pg');

const db = new Client({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSW,
    database: process.env.DATABASE_NAME
});

module.exports = db