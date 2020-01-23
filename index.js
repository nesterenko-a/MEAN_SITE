const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const app = express();
const config = require('./config/db');
const account = require('./routes/account');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
//* Соединени и 2 лога по успешному и неуспешному соединению с БД
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }, );
mongoose.connection.on('connected', () => {
    console.log("Success connection BD MongoDB");  
});
mongoose.connection.on('error', (err) => {
    console.log("Error connection BD MongoDB " + err);   
});
///////////////////////////////////////////////////////////////////

//* Технология позволяющая внедрять стороние API службы. (Прим. Регистрация через VK.com)
app.use(cors());

//* Для отслеживания POST данных из FORM страниц. Будем получать данные из форм в JSON формате
app.use(bodyParser.json());

//* Обработка URL адресов
//app.get('/', (req, res) => {
//    res.send({somes1: "some json"});
//});

app.use('/account',account);


app.listen(port, () => {
    console.log("Server run on " + port + " port");
});


