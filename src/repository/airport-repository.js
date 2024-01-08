const { Airport, City } = require('../models/index');

class AirportRepository {

    async createAirport({ name, city_id }) {
        try {
            const airport = await Airport.create({ name, city_id });
            return airport;
        } catch (error) {
            console.log("Some error occurred at repository layer !");
            throw (error);
        }
    }

    async getAirport(id) {
        try {
            const airport = await Airport.findByPk(id);
            console.log(airport)
            return airport;
        } catch (error) {
            console.log("Some error occurred at repository layer !");
            throw (error);
        }
    }

    async updateAirport(id, data) {
        try {
            const airport = await Airport.update(data, {
                where: {
                    id: id
                }
            });
            return airport;
        } catch (error) {
            console.log("Some error occurred at repository layer !");
            throw (error);
        }
    }

    async deleteAirport(id) {
        try {
            await Airport.destroy({
                where: {
                    id: id
                }
            });
            return true;
        } catch (error) {
            console.log("Some error occurred at repository layer !");
            throw (error);
        }
    }
}

module.exports = AirportRepository;