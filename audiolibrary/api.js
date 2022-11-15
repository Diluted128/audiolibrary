const client = require('./dbconnection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();

//const bodyParser = require("body-parser");
// app.use(bodyParser.json());

//
app.get('/aiecraft', require('./queries'))

// app.get('/users/:id', (req, res)=>{
//     client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })

// app.post('/users', (req, res)=> {
//     const user = req.body;
//     let insertQuery = `insert into users(id, firstname, lastname, location)
//                        values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`
//
//     client.query(insertQuery, (err, result)=>{
//         if(!err){
//             res.send('Insertion was successful')
//         }
//         else{ console.log(err.message) }
//     })
//     client.end;
// })