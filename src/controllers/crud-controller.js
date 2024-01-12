class CrudController {
    constructor(service) {
        this.service = service
    }

    create = async (req, res) => {
        try {
            const result = await this.service.create(req.body);
            res.status(201).json({
                data: result,
                success: true,
                error: {},
                message: "Successfully created the instance"
            });
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                error: error,
                message: "Cannot create the instance"
            });
        }
    }


    get = async (req, res) => {
        try {
            const result = await this.service.get(req.params.id);
            res.status(200).json({
                data: result,
                success: true,
                error: {},
                message: "Successfully fetched the data"
            });
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                error: error,
                message: "Cannot fetch the data"
            });
        }
    }


    getAll = async (req, res) => {
        try {
            const result = await this.service.getAll(req.query);
            res.status(200).json({
                data: result,
                success: true,
                error: {},
                message: "Successfully fetched all the data"
            });
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                error: error,
                message: "Cannot fetch the data"
            });
        }
    }


    destroy = async (req, res) => {
        try {
            const response = await this.service.destroy(req.params.id);
            res.status(200).json({
                data: response,
                success: true,
                error: {},
                message: "Successfully deleted the instance"
            });
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                error: error,
                message: "Cannot delete the instance"
            });
        }
    }

}


module.exports = CrudController;