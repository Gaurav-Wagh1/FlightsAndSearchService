const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');

// create   =>  POST req, data in req body;
router.post('/city' , CityController.create);

// delete   =>  DELETE req, URL => /city/:id
router.delete('/city/:id', CityController.destroy);

// get      =>  GET req, URL - /city/:id
router.get('/city/:id', CityController.get);

// patch    =>  PATCH req, id through url params & data through req body;
router.patch('/city/:id', CityController.update);


module.exports = router;