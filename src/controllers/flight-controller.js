const { FlightService } = require('../services/index');
const CrudController = require('./crud-controller');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');


const flightService = new FlightService();

class FlightController extends CrudController {
    constructor() {
        super(flightService);
    }

    #createRequestDataObject = (method, reqObject) => {
        switch (method) {
            case "create":
                return {
                    flightNumber: reqObject.flightNumber,
                    airplaneId: reqObject.airplaneId,
                    departureAirportId: reqObject.departureAirportId,
                    arrivalAirportId: reqObject.arrivalAirportId,
                    arrivalTime: reqObject.arrivalTime,
                    departureTime: reqObject.departureTime,
                    price: reqObject.price
                }

            case "getAll":
                const result = {};
                if (reqObject.departureAirportId) {
                    result.departureAirportId = reqObject.departureAirportId;
                }
                if (reqObject.arrivalAirportId) {
                    result.arrivalAirportId = reqObject.arrivalAirportId;
                }
                if (reqObject.airplaneId) {
                    result.airplaneId = reqObject.airplaneId;
                }
                if (reqObject.price) {
                    result.price = reqObject.price;
                }
                if (reqObject.minPrice) {
                    result.minPrice = reqObject.minPrice;
                }
                if (reqObject.maxPrice) {
                    result.maxPrice = reqObject.maxPrice;
                }
                return result;

            case "update":
                const dataObj = {};
                if (reqObject.departureAirportId) {
                    dataObj.departureAirportId = reqObject.departureAirportId;
                }
                if (reqObject.arrivalAirportId) {
                    dataObj.arrivalAirportId = reqObject.arrivalAirportId;
                }
                if (reqObject.airplaneId) {
                    dataObj.airplaneId = reqObject.airplaneId;
                }
                if (reqObject.price) {
                    dataObj.price = reqObject.price;
                }
                if (reqObject.arrivalTime) {
                    dataObj.arrivalTime = reqObject.arrivalTime;
                }
                if (reqObject.departureTime) {
                    dataObj.departureTime = reqObject.departureTime;
                }
                if (reqObject.boardingGate) {
                    dataObj.boardingGate = reqObject.boardingGate;
                }
                if (reqObject.totalSeats) {
                    dataObj.totalSeats = reqObject.totalSeats;
                }
                return dataObj;

            default:
                return {};
        }
    }

    create = async (req, res) => {
        try {
            const flightDataObject = this.#createRequestDataObject("create", req.body);
            const flight = await flightService.create(flightDataObject);
            return res.status(SuccessCodes.CREATED).json({
                data: flight,
                success: true,
                error: {},
                message: "Successfully created teh flight"
            });
        } catch (error) {
            return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
                data: {},
                success: false,
                error: error,
                message: "Not able to create the flight"
            });
        }
    }


    getAll = async (req, res) => {
        try {
            const flightDataObject = this.#createRequestDataObject("getAll", req.query);
            const flights = await flightService.getAll(flightDataObject);
            return res.status(SuccessCodes.OK).json({
                data: flights,
                success: true,
                error: {},
                message: "Successfully fetched the flight"
            });
        } catch (error) {
            return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
                data: {},
                success: false,
                error: error,
                message: "Not able to fetch the flight"
            });
        }
    }

    update = async (req, res) => {
        try {
            const flightDataObject = this.#createRequestDataObject("update", req.body);
            const response = await flightService.update(req.params.id, flightDataObject);
            return res.status(SuccessCodes.OK).json({
                data: response,
                success: true,
                error: {},
                message: "Successfully fetched the flight"
            });
        } catch (error) {
            return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
                data: {},
                success: false,
                error: error,
                message: "Not able to update the flight"
            });
        }
    }
}


module.exports = FlightController;