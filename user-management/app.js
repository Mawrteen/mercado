
'use strict';


var app = require('express')(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv').config(),
    db = mongoose.connect(process.env.MONGODB_URL),
    User = require('./models/userModel'),
    port = process.env.PORT || 9000,
    userRouter = require('./routes/userRoutes')(User);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/v1/users', userRouter);

app.get('/', function(req, res) {
    res.send('User Management REST Services 0.0.1');
});

app.listen(port, function() {
    console.log('Server Started on Port: ' + port);
});