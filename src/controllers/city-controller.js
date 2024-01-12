const { CityService } = require('../services/index');
const CrudController = require('./crud-controller');
const {SuccessCodes, ServerErrorCodes} = require('../utils/error-codes');

const cityService = new CityService();

class CityController extends CrudController {
    constructor() {
        super(cityService);
    }

    #createRequestDataObject = (method, reqObject) => {
        switch (method) {
            case "update" || "getAll":
                return {
                    name: reqObject.name
                };
            default:
                return {};
        }
    }


    update = async (req, res) => {
        try {
            const cityRequestData = this.#createRequestDataObject("update", req.body);
            const response = cityService.update(req.params.id, cityRequestData);
            return res.status(SuccessCodes.OK).json({
                data: response,
                success: true,
                message: "Successfully updated the city",
                error: {}
            });

        } catch (error) {
            console.log(error);
            return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
                data: {},
                success: false,
                message: "Not able to update the city",
                error: error
            });
        }
    }


    getAll = async (req, res) => {
        try {
            const cityRequestData = this.#createRequestDataObject("getAll", req.query);
            const cities = await cityService.getAll(cityRequestData);
            res.status(SuccessCodes.OK).json({
                data: cities,
                success: true,
                message: "Successfully fetched all the cities",
                error: {}
            });
        } catch (error) {
            return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
                data: {},
                success: false,
                message: "Not able to fetch all the cities",
                error: error
            });
        }
    }
}


module.exports = CityController;