const { AirplaneRepository } = require('../repository/index');

class AirplaneService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async createAirplane(data) {
        try {
            const airplane = await this.airplaneRepository.createAirplane(data);
            return airplane;
        } catch (error) {
            console.log("Something wrong at service layer!");
            throw { error }
        }
    }


    async getAirplane(id) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(id);
            return airplane;
        } catch (error) {
            console.log("Something wrong at service layer!");
            throw { error }
        }
    }


    async updateAirplane(id, data) {
        try {
            const airplane = await this.airplaneRepository.updateAirplane(id, data);
            return airplane;
        } catch (error) {
            console.log("Something wrong at service layer!");
            throw { error }
        }
    }


    async deleteAirplane(id) {
        try {
            const response = await this.airplaneRepository.deleteAirplane(id);
            return response;
        } catch (error) {
            console.log("Something wrong at service layer!");
            throw { error }
        }
    }


    async getAllAirplanes() {
        try {
            const airplanes = await this.airplaneRepository.getAllAirplanes();
            return airplanes;
        } catch (error) {
            console.log("Something wrong at service layer!");
            throw { error }
        }
    }
}

module.exports = AirplaneService;