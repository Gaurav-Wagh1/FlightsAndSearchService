const { AirplaneService } = require('../services/index');

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.createAirplane(req.body);
        res.status(201).json({
            data: airplane,
            success: true,
            error: {},
            message: "Successfully created the airplane"
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Cannot create the airplane"
        });
    }
}


const get = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.params.id);
        res.status(200).json({
            data: airplane,
            success: true,
            error: {},
            message: "Successfully fetched the airplane"
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Cannot fetch the airplane"
        });
    }
}

const update = async (req, res) => {
    try {
        const new_airplane = await airplaneService.updateAirplane(req.params.id, req.body);
        res.status(200).json({
            data: new_airplane,
            success: true,
            error: {},
            message: "Successfully updated the airplane"
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Cannot update the airplane"
        });
    }
}

const destroy = async (req, res) => {
    try {
        const new_airplane = await airplaneService.deleteAirplane(req.params.id);
        res.status(200).json({
            data: new_airplane,
            success: true,
            error: {},
            message: "Successfully deleted the airplane"
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Cannot delete the airplane"
        });
    }
}


const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAllAirplanes();
        res.status(200).json({
            data: airplanes,
            success: true,
            error: {},
            message: "Successfully fetched all the airplanes"
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Cannot fetch the airplanes"
        });
    }
}


module.exports = {
    create,
    get,
    update,
    destroy,
    getAll
}