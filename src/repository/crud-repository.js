const { Op } = require('sequelize');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something wrong at repository level!");
            throw error;
        }
    }


    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something wrong at repository level!");
            throw error;
        }
    }


    async getAll(filter) {
        try {
            const results = await this.model.findAll({
                where: filter
            });
            return results;
        } catch (error) {
            console.log("Something wrong at repository level!");
            throw error;
        }
    }


    async update(id, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return result;
        } catch (error) {
            console.log("Something wrong at repository level!");
            throw error;
        }
    }


    async destroy(id) {
        try {
            await this.model.destroy({
                where: {
                    id: id
                }
            });
            return true;
        } catch (error) {
            console.log("Something wrong at repository level!");
            throw error;
        }
    }
}

module.exports = CrudRepository;