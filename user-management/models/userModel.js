var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var userModel = new Schema({
    username: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    createdAt: {type: Date, default: new Date()},
    updatedAt: {type: Date, default: new Date()},
    deletedAt: {type: Date},
    lastLogin: {type: Date, default: null},
    role: {type: String},
    isActive: {type: Boolean, default: true},
    flagged: {type: Boolean, default: false},
    defaultSize: {type: Number},
    billing: {
        address: {
            streetAddress: {type: String},
            address2: {type: String},
            phone: {type: String},
            city: {type: String},
            state: {type: String},
            zipCode: {type: Number},
            country: {type: String}
        }
    },
    shipping: {
        address: {
            streetAddress: {type: String},
            address2: {type: String},
            phone: {type: String},
            city: {type: String},
            state: {type: String},
            zipCode: {type: Number},
            country: {type: String}
        }
    },
    cards: [{
        cardType: {type: String},
        expirationDate: {type: String},
        cardholderName: {type: String},
        last4: {type: Number}
    }],
    watchlist: [{
        shoe: {type: String},
        size: {type: Number}
    }]
});

module.exports = mongoose.model('User', userModel);