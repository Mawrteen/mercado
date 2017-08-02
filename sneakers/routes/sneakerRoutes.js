var express = require('express');


var routes = function (Sneaker) {
    var sneakerRouter = express.Router();

    sneakerRouter.route(/)
        .post(function (req, res) {
            var sneaker = new Sneaker(req.body);
            sneaker.save();
            res.status(201).send(sneaker);
    })
}