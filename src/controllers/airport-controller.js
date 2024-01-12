const { AirportService } = require('../services/index');
const CrudController = require('./crud-controller');

const airportService = new AirportService();

class AirportController extends CrudController {
    constructor() {
        super(airportService);
    }

    #createRequestDataObject = (method, reqObject) => {
        switch (method) {
            case "create":
                return {
                    name: reqObject.name,
                    city_id: reqObject.city_id,
                    address: reqObject.address
                }

            case "update":
                const result = {}
                if (reqObject.name) {
                    result.name = reqObject.name
                }
                if (reqObject.city_id) {
                    result.city_id = reqObject.city_id
                }
                if (reqObject.address) {
                    result.address = reqObject.address
                }
                return result;

            default:
                return {};
        }
    }


    create = async (req, res) => {
        try {
            const airportRequestData = this.#createRequestDataObject("create", req.body);
            const airport = await airportService.create(airportRequestData);
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


    update = async (req, res) => {
        try {
            const airportRequestData = this.#createRequestDataObject("update", req.body)
            const updatedAirport = await airportService.update(req.params.id, airportRequestData);
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
}


module.exports = AirportController;