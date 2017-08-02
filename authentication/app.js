
'use strict';


var app = require('express')(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv').config(),
    morgan = require('morgan'),
    db = mongoose.connect(process.env.MONGODB_URL),
    User = require('./models/userModel'),
    port = process.env.PORT || 9010,
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    authenticationRouter = require('./routes/authenticationRoutes')(User),
    localStrategy = require('passport-local').Strategy;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(passport.initialize());
app.use('/api/v1/authentication', authenticationRouter);


app.get('/', function(req, res) {
    res.send('Authentication REST Services 0.0.1');
});

app.listen(port, function() {
    console.log('Server Started on Port: ' + port);
});