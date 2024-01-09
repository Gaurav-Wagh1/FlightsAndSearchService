const express = require('express');
const router = express.Router();

const { 
    CityController,
    AirportController,
    AirplaneController,
    FlightController
} = require('../../controllers/index');


//--------------------------------------- city routes-----------------------------------



router.post('/city', CityController.create);

router.delete('/city/:id', CityController.destroy);

router.get('/city/:id', CityController.get);

router.patch('/city/:id', CityController.update);

router.get('/city', CityController.getAll);


//--------------------------------------- airport routes-----------------------------------


router.post('/airports', AirportController.create);

router.get('/airports/:id', AirportController.get);

router.patch('/airports/:id', AirportController.update);

router.delete('/airports/:id', AirportController.destroy);


//--------------------------------------- airplane routes-----------------------------------


router.post('/airplanes', AirplaneController.create);

router.delete('/airplanes/:id', AirplaneController.destroy);

router.get('/airplanes/:id', AirplaneController.get);

router.patch('/airplanes/:id', AirplaneController.update);

router.get('/airplanes', AirplaneController.getAll);


//--------------------------------------- flight routes-----------------------------------


router.post('/flights', FlightController.create);

router.get('/flights/:id', FlightController.get);

router.get('/flights', FlightController.getAll);

module.exports = router;



// create   =>  POST req, data in req body;
// get      =>  GET req, URL - /airplanes/:id
// patch    =>  PATCH req, id through url params & data through req body;
// delete   =>  DELETE req, URL => /airplanes/:id