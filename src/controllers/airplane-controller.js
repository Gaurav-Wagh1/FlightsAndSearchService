const { AirplaneService } = require('../services/index');
const CrudController = require('./crud-controller');
const {SuccessCodes, ServerErrorCodes} = require('../utils/error-codes');

const airplaneService = new AirplaneService();

class AirplaneController extends CrudController {
    constructor() {
        super(airplaneService)
    }

    #createRequestDataObject = (method, reqObject) => {
        switch (method) {
            case "create":
                return {
                    modelNumber: reqObject.modelNumber,
                    capacity: reqObject.capacity
                }

            case "update":
                const result = {};
                if (reqObject.modelNumber) {
                    result.modelNumber = reqObject.modelNumber
                }
                if (reqObject.capacity) {
                    result.capacity = reqObject.capacity
                }
                return result;
            default:
                return {}
        }
    }


    create = async (req, res) => {
        try {
            const airplaneRequestData = this.#createRequestDataObject("create", req.body);
            const airplane = await airplaneService.create(airplaneRequestData);
            res.status(SuccessCodes.CREATED).json({
                data: airplane,
                success: true,
                error: {},
                message: "Successfully created the airplane"
            });
        } catch (error) {
            res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
                data: {},
                success: false,
                error: error,
                message: "Cannot create the airplane"
            });
        }
    }


    update = async (req, res) => {
        try {
            const airplaneRequestData = this.#createRequestDataObject("update", req.body);
            const new_airplane = await airplaneService.update(req.params.id, airplaneRequestData);
            res.status(SuccessCodes.OK).json({
                data: new_airplane,
                success: true,
                error: {},
                message: "Successfully updated the airplane"
            });
        } catch (error) {
            res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
                data: {},
                success: false,
                error: error,
                message: "Cannot update the airplane"
            });
        }
    }
}


module.exports = AirplaneController;