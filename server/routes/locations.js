var express = require('express');
var route = express.Router();
const{
    createLocation,
    updateLocation,
    deleteLocation,
    getAllLocations,
    getLocationById,
    calculateDistance
} = require('../controllers/locationController');

route.post('/location', createLocation);

route.put('/locations/:id', updateLocation);

route.delete('/locations/:id', deleteLocation);

route.get('/locations', getAllLocations);

route.get('/locations/:id', getLocationById);

// route.post('/location/distance', calculateDistance);

module.exports = route;