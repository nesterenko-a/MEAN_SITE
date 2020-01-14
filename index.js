const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const app = express();
const config = require('./config/db');

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//! Соединени и 2 лога по успешному и неуспешному соединению с БД
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }, );
mongoose.connection.on('connected', () => {
    console.log("Success connection BD MongoDB");  
});
mongoose.connection.on('error', (err) => {
    console.log("Error connection BD MongoDB " + err);   
});
///////////////////////////////////////////////////////////////////


app.get('/', (req, res) => {
    res.send({somes1: "some json"});
});
app.get('/getfile', (req, res) => {
    res.sendfile('some.xml');
});
app.listen(port, () => {
    console.log("Server run on " + port + " port");
});


