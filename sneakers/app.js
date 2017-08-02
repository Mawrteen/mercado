
'use strict';


var app = require('express')(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv').config(),
    db = mongoose.connect(process.env.MONGODB_URL),
    Sneaker = require('./models/sneakerModel'),
    port = process.env.PORT || 9000,
    sneakerRouter = require('./routes/sneakerRoutes')(Sneaker);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/v1/sneakers', sneakerRouter);

app.get('/', function(req, res) {
    res.send('Sneakers Management REST Services 0.0.1');
});

app.listen(port, function() {
    console.log('Server Started on Port: ' + port);
});