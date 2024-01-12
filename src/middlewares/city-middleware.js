const { ClientErrorCodes } = require('../utils/error-codes');


const validateCreateCity = (req, res, next) => {
    if (!req.body.name) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            error: "Missing mandatory data for creating the city",
            message: "Invalid request body for creating city"
        });
    }

    next();
}

module.exports = { validateCreateCity }