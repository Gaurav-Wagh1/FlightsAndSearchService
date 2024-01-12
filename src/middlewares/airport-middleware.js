const { ClientErrorCodes } = require('../utils/error-codes');


const validateCreateAirport = (req, res, next) => {
    if (!req.body.name || !req.body.city_id) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            error: "Missing mandatory data for creating the airport",
            message: "Invalid request body for creating airport"
        });
    }

    next();
}

module.exports = { validateCreateAirport }