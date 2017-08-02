var express = require('express'),
    localStrategy = require('passport-local').Strategy,
    jwt = require('jsonwebtoken'),
    dotenv = require('dotenv').config();

var routes = function (User) {
    var authenticationRouter = express.Router();

    authenticationRouter.route('/authenticate')
        .post(function (req, res) {
            User.findOne({
                username: req.body.username
            }, function(err, user) {
                if (err) throw err;
                console.log("connected and no error");
                console.log(process.env.secret);
                if (!user) {
                    res.send({success: false, message: "Authentication Failed. Invalid User!"});
                    return;
                } else if(user){
                    if(user.password != req.body.password) {
                        res.json({ success: false, message: "Authentication Failed. Wrong Password!"});
                        return;
                    }
                }
                    var token = jwt.sign(user, process.env.secret, {
                        expiresIn: 1440
                    });
                    res.json({
                        success: true,
                        message: "User Successfully Authenticated",
                        token: token
                    });
                    res.json({success: true, message: "All Good!"});
               }
            )
        })
    return authenticationRouter;
};

module.exports = routes;