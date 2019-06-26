const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const payment = require('../api/payment');
const repository = require('../repository/payment');

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

payment(app, repository);

app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error. Try Again!'});
})

module.exports = app