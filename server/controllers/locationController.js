const {locationSchema} = require('../model/locationmodel');


async function createLocation(req, res){
    const{locationName, description, website, phone, contactPerson, coordinates} = req.body;
    const newLocation = new locationSchema({
        locationName, description, website, phone, contactPerson, coordinates
    });

    try {
        await newLocation.save();
        res.status(200).json(newLocation)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function updateLocation(req, res){
    try{
        const id = req.params.id;
        const updatedLocation = req.body;
        const options = {new: true};

        const respnse = await locationSchema.findByIdAndUpdate(id, updatedLocation, options);

        res.send(respnse);
    }

    catch(error){
        res.status(400).json({message: error.message});
    }
}

// async function deleteLocation(req, res){
//     try{
//         const id = req.params.id;
//         const updatedLocation = req.body;
//         const options = {new: true};

//         const respnse = await locationSchema.findByIdAndDelete(id, updatedLocation, options);

//         res.send(respnse);
//     }

//     catch(error){
//         res.status(400).json({message: error.message});
//     }
// }

function getAllLocations(req, res, next){
    locationSchema.find({}, '', function(err, records){
        //showError(err);
        res.json({
            successful: true,
            records
        })
    });
}

async function getLocationById(req, res, next){
    
    try{
        const record = await locationSchema.findById(req.params.id);
        if(record == null){
            res.status(404).json("Location not found");
        } 
        res.json({
            successful: true,
            record
        })
    }

    catch(error){
        res.status(500).json({message: error.message});
    }
}
module.exports = {createLocation, updateLocation, getAllLocations, getLocationById}