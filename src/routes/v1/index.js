const express = require('express');
const router = express.Router();

const { CityController, AirportController, AirplaneController } = require('../../controllers/index');


//------------------------------------- city routes


// create   =>  POST req, data in req body;
router.post('/city', CityController.create);

// delete   =>  DELETE req, URL => /city/:id
router.delete('/city/:id', CityController.destroy);

// get      =>  GET req, URL - /city/:id
router.get('/city/:id', CityController.get);

// patch    =>  PATCH req, id through url params & data through req body;
router.patch('/city/:id', CityController.update);

// get all
router.get('/city', CityController.getAll);


//------------------------------------- airport routes


// create   =>  POST req, data in req body;
router.post('/airports', AirportController.create);

// get      =>  GET req, URL - /city/:id
router.get('/airports/:id', AirportController.get);

// patch    =>  PATCH req, id through url params & data through req body;
router.patch('/airports/:id', AirportController.update);

// delete   =>  DELETE req, URL => /city/:id
router.delete('/airports/:id', AirportController.destroy);


//------------------------------------- airplane routes


// create   =>  POST req, data in req body;
router.post('/airplanes', AirplaneController.create);

// delete   =>  DELETE req, URL => /airplanes/:id
router.delete('/airplanes/:id', AirplaneController.destroy);

// get      =>  GET req, URL - /airplanes/:id
router.get('/airplanes/:id', AirplaneController.get);

// patch    =>  PATCH req, id through url params & data through req body;
router.patch('/airplanes/:id', AirplaneController.update);

// get all
router.get('/airplanes', AirplaneController.getAll);



module.exports = router;