const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }


    async createAirport(dataObject) {
        try {
            const response = await this.airportRepository.createAirport(dataObject);
            return response;
        } catch (error) {
            console.log("Error generated at service layer !");
            throw error;
        }
    }


    async getAirport(id) {
        try {
            const response = await this.airportRepository.getAirport(id);
            return response;
        } catch (error) {
            console.log("Error generated at service layer !");
            throw error;
        }
    }


    async updateAirport(id, data) {
        try {
            const response = await this.airportRepository.updateAirport(id, data);
            return response;
        } catch (error) {
            console.log("Error generated at service layer !");
            throw error;
        }
    }


    async deleteAirport(id) {
        try {
            const response = await this.airportRepository.deleteAirport(id);
            return response;
        } catch (error) {
            console.log("Error generated at service layer !");
            throw error;
        }
    }
}

module.exports = AirportService;