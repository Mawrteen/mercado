var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sneakerModel = new Schema({
    id: {type: Number},
    uuid: {type: String},
    brand: {type: String},
    charityCondition: {type: Boolean, default: false},
    colorway: {type: String},
    condition: {type: String},
    description: {type: String},
    media: {
        imageUrl: {type: String},
        smallImageUrl: {type: String},
        thumbUrl: {type: String},
    },
    name: {type: String},
    releaseDate: {type: Date},
    retailPrice: {type: Number},
    shoe: {type: String},
    shortDescription: {type: String},
    styleId: {type: Number},
    title: {type: String},
    urlKey: {type: String},
    year: {type: Number},
    meta: {
        deleted: {type: Boolean},
        hidden: {type: Boolean},
        lock_selling: {type: Boolean},
        lock_buying: {type: Boolean},
        redirected: {type: Boolean},
        charity: {type: Boolean},
    },
    bids:
        [{
            user: {type: String},
            size: {type: Number},
            amount: {type: String},
            date_set: {type: Date},
            date_exp: {type: Date}
        }],
    sells:
        [{
            user: {type: String},
            size: {type: Number},
            amount: {type: String},
            date_set: {type: Date},
            date_exp: {type: Date}
        }]
});

module.exports = mongoose.model('Sneaker', sneakerModel);