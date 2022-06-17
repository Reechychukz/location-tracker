const mongoose = require("mongoose");
const {Schema} = mongoose;

const location = new Schema({
    locationName: {
        required: true,
        type: String
    }, 
    description: {
        required: true,
        type: String
    },
    website: {
        required: false,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    contactPerson: {
        required: true,
        type: String
    },
    coordinates: {
        required: true,
        type: Object
    }
});

const locationSchema = mongoose.model('locations', location);

module.exports = {locationSchema};