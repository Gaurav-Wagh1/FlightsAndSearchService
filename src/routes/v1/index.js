const express = require('express');
const router = express.Router();

//classes of all the controllers;
const {
    AirplaneController,
    FlightController,
    CityController,
    AirportController,
} = require('../../controllers/index');


// instances of all the imported / required classes;
const cityController = new CityController();
const airportController = new AirportController();
const airplaneController = new AirplaneController();
const flightController = new FlightController();


//--------------------------------------- city routes-----------------------------------


// pass array of objects of cities to add multiple cities in one go;
router.post('/cities', cityController.create);

router.get('/cities/:id', cityController.get);

router.get('/cities', cityController.getAll);

router.patch('/cities/:id', cityController.update);

router.delete('/cities/:id', cityController.destroy);



//--------------------------------------- airport routes-----------------------------------


router.post('/airports', airportController.create);

router.get('/airports/:id', airportController.get);

router.get('/airports', airportController.getAll);

router.patch('/airports/:id', airportController.update);

router.delete('/airports/:id', airportController.destroy);



//--------------------------------------- airplane routes-----------------------------------


router.post('/airplanes', airplaneController.create);

router.get('/airplanes/:id', airplaneController.get);

router.get('/airplanes', airplaneController.getAll);

router.patch('/airplanes/:id', airplaneController.update);

router.delete('/airplanes/:id', airplaneController.destroy);




//--------------------------------------- flight routes-----------------------------------


router.post('/flights', flightController.create);

router.get('/flights/:id', flightController.get);

router.get('/flights', flightController.getAll);

router.delete('/flights/:id', flightController.destroy);

router.patch('/flights/:id', flightController.update);



module.exports = router;



// create   =>  POST req, data in req body;
// get      =>  GET req, URL - /airplanes/:id
// patch    =>  PATCH req, id through url params & data through req body;
// delete   =>  DELETE req, URL => /airplanes/:id