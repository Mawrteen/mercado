var express = require('express');

var routes = function (User) {
    var userRouter = express.Router();

    userRouter.route('/')
        .post(function(req,res){
            var user = new User(req.body);

            user.save();
            res.status(201).send(user);

        })
        .get(function(req, res){
            User.find(function(err, users){
                if(err)
                    res.status(500).send(err)

                res.json(users)
            })
        })

    userRouter.route('/username/:username')
        .get(function(req, res){

            User.findOne({ username: req.params.username }, function(err, username){
                if(err)
                    res.status(500).send(err);

                res.json(username);

            });
        });


    userRouter.use('/:userId', function(req, res, next){
        User.findById(req.params.userId, function(err, user){
            if(err)
                res.status(500).send(err);
            else if(user) {
                req.user = user;
                next();
            }else
                res.status(404).send('User Doesn\'t Exist');
        })
    })
    userRouter.route('/:userId')
        .get(function(req, res){
            res.json(req.user);
        })
        .put(function(req, res){

            req.user.username = req.body.username;
            req.user.firstName = req.body.firstName;
            req.user.lastName = req.body.lastName;
            req.user.email = req.body.email;
            req.user.password = req.body.password;
            req.user.isActive = req.body.isActive;
            req.user.flagged = req.body.flagged;
            req.user.defaultSize = req.body.defaultSize;
            req.user.billing.address.streetAddress = req.body.streetAddress;
            req.user.billing.address.address2 = req.body.address2;
            req.user.billing.address.phone = req.body.phone;
            req.user.billing.address.city = req.body.city;
            req.user.billing.address.state = req.body.state;
            req.user.billing.address.zipCode = req.body.zipCode;
            req.user.billing.address.country = req.body.country;
            req.user.shipping.address.streetAddress = req.body.streetAddress;
            req.user.shipping.address.address2 = req.body.address2;
            req.user.shipping.address.phone = req.body.phone;
            req.user.shipping.address.city = req.body.city;
            req.user.shipping.address.state = req.body.state;
            req.user.shipping.address.zipCode = req.body.zipCode;
            req.user.shipping.address.country = req.body.country;
            req.user.cards.cardType = req.body.cardType;
            req.user.cards.expirationDate = req.body.expirationDate;
            req.user.cards.cardholderName = req.body.cardholderName;
            req.user.cards.last4 = req.body.last4;
            req.user.watchlist.shoe = req.body.shoe;
            req.user.watchlist.size = req.body.size;
            req.user.save(function(err){
                if (err)
                    res.status(500).send(err);

                res.json(req.user);
            });

        })
        .patch(function(req, res){
            if(req.body._id)
                delete req.body._id;
            for(u in req.body){
                req.user[u] = req.body[u];
            }
            req.user.save(function(err){
                if (err)
                    res.status(500).send(err);

                res.json(req.user);
            });
        })
        .delete(function(req, res){
            req.user.remove(function(err){
                if(err)
                    res.status(500).send(err);
                res.status(204).send('User Successfully Removed!');
            });
        })
    return userRouter;
};

module.exports = routes;