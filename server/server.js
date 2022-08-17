// environment vars
require("dotenv").config();
require('./config/config');

const express = require('express');
// const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));


// let conectar = async() => {
//     await mongoose.connect('mongodb://localhost:27017/cafe', {});
// };

// conectar().then(() => {
//     console.log('DB Online');
// }).catch((err) => {
//     throw err;
// });


app.listen(process.env.PORT, () => {
    console.log('Server running at port: ', process.env.PORT);
});