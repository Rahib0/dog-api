const express = require("express");
const app = express();
const port = 3000;
const dogData = require("./data")
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('I am real!');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowed!');
});

const dogRoutes = require('./controllers/dogs');
app.use('/dogs', dogRoutes);

// app.get('/dogs', (req, res) => res.send(dogData))


module.exports = app;