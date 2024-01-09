const { Flight } = require('../models/index');

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something wrong at repository level !");
            throw { error };
        }
    }

    async getFlight(id) {
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log("Something wrong at repository level !");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const flights = await Flight.findAll({
                where: filter               // final filter object from service layer;
            });
            return flights;
        } catch (error) {
            console.log("Something wrong at repository level !");
            throw { error };
        }
    }
}

module.exports = FlightRepository;