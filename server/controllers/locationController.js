const { locationSchema } = require('../model/locationmodel');
const { solveDistance } = require('../../utilities/solveDistance');
const { myLocation } = require('../../utilities/rapidAPI');
const { response } = require('../../app');

async function createLocation(req, res) {
    const { locationName, description, website, phone, contactPerson, coordinates } = req.body;
    const newLocation = new locationSchema({
        locationName, description, website, phone, contactPerson, coordinates
    });

    try {
        await newLocation.save();
        return res.json({
            successful: true,
            message: newLocation
        });
    }
    catch (error) {
        return res.status(400).json({ successful: false, message: error.message })
    }
}

async function updateLocation(req, res) {
    try {
        const id = req.params.id;
        const updatedLocation = req.body;
        const options = { new: true };

        const response = await locationSchema.findByIdAndUpdate(id, updatedLocation, options);

        if(response == null){
            return res.status(404).json({successful: false, message: "Location not found"})
        }

        return res.json({
            successful: true,
            message: response
        });
    }

    catch (error) {
        return res.status(400).json({ successful: false, message: error.message });
    }
}

async function deleteLocation(req, res) {
    try {
        const id = req.params.id;
        const locationToDelete = await locationSchema.findByIdAndDelete(id);

        return res.json({
            successful: true,
            message: `Location with id: ${locationToDelete.id} has been deleted.`
        });
    }

    catch (error) {
        return res.status(400).json({ successful: false, message: error.message });
    }
}

function getAllLocations(req, res, next) {
    locationSchema.find({}, '', function (err, records) {

        return res.json({
            successful: true,
            message: records
        })
    });
}

async function getLocationById(req, res, next) {

    try {
        const record = await locationSchema.findById(req.params.id);
        if(record == null) {
            return res.status(404).json({successful: false, message: "Not found"}); 
        }

        return res.json({
            successful: true,
            message: record
        })
    }

    catch (error) {
        return res.status(500).json({ successful: false, message: error.message });
    }
}

async function calculateDistance(req, res, next) {
    try {
        const locationToFind = await locationSchema.findById(req.params.id); //locationSchema.findById(req.params.id);

        const coordinates = locationToFind.coordinates;

        
        const coordinates2 = await myLocation()

        const distance = solveDistance(coordinates, coordinates2);

        return res.json({
            successful: true,
            distance
        })

    }
    catch (error) {
        res.status(400).json({ successful: false, message: error.message });
    }
}
module.exports = { createLocation, updateLocation, deleteLocation, getAllLocations, getLocationById, calculateDistance }