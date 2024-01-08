const { AirportService } = require('../services/index');

const airportService = new AirportService();


// POST req, data in req body;
const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        res.status(201).json({
            result: airport,
            success: true,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            result: {},
            success: false,
            error: error
        });
    }
}


// GET req, URL - /city/:id
const get = async (req, res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        res.status(200).json({
            result: airport,
            success: true,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            result: {},
            success: false,
            error: error
        });
    }
}


// PATCH req, id through url params & data through req body;
const update = async (req, res) => {
    try {
        const updatedAirport = await airportService.updateAirport(req.params.id, req.body);
        res.status(200).json({
            result: updatedAirport,
            success: true,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            result: {},
            success: false,
            error: error
        });
    }
}


// DELETE req, URL => /city/:id
const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        res.status(200).json({
            result: response,
            success: true,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            result: {},
            success: false,
            error: error
        });
    }
}

module.exports = {
    create,
    get,
    update,
    destroy
}