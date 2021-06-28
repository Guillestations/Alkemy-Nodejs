const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
require('./models/asociations');

// conexion a la base de datos
const db = require('./config/db');
// const bodyParser = require('body-parser');


// Importo el modelo
require('./models/Personaje');
db.sync()
    .then(() => console.log('*********** Conectado al servidor ***************'))
    .catch(error => console.log(error));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

app.use('/', routes());
const Port = 8000;
const Port1 = 5000;
app.listen(Port);