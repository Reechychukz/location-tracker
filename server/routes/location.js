var express = require('express');
var route = express.Router();

route.post('/location', check, createLocation);

route.put('/location', updateLocation);

route.delete('/delete', deleteLocation);

route.get('/locations', getAllLocations);

route.get('/location', getLocationById);

route.post('/location/distance', calculateDistance);
