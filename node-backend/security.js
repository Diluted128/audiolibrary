const crypto = require('crypto')
const db = require("./dbconnection");

const secret = process.env.DATABASE_PASSW;

const generateHash = (phrase) => {
    return crypto.createHmac('sha256', secret)
                 .update(phrase)
                    .digest('hex');
}

const getClients = async () => {
    const data = await db.query('SELECT * FROM CLIENT');
    db.end;
    return data;
}

const validateHash = hash => {
    return getClients().then(gotclients => {
        var clients = gotclients.rows;
        for (let i = 0; i < clients.length; i++) {
            const generatedHash = crypto.createHmac('sha256', secret)
                .update(clients[i].id.toString() + clients[i].email)
                .digest('hex');
            if (hash === generatedHash) {
                return clients[i];
            }
        }
    })
}

module.exports = {
    generateHash: generateHash,
    validateHash: validateHash
}