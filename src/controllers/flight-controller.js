const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            error: {},
            message: "Successfully created teh flight"
        });
    } catch (error) {
        console.log("Not able to create the flight");
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Not able to create the flight"
        });
    }
}


const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: flight,
            success: true,
            error: {},
            message: "Successfully fetched the flight"
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Not able to fetch the flight"
        });
    }
}


const getAll = async (req, res) => {
    try {        
        const flights = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            error: {},
            message: "Successfully fetched the flight"
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Not able to fetch the flight"
        });
    }
}
module.exports = {
    create,
    get,
    getAll
}