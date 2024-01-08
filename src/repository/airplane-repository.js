const { Airplane } = require('../models/index');

class AirplaneRepository {

    async createAirplane({modelNumber, capacity}) {
        try {
            const airplane = await Airplane.create({modelNumber, capacity});
            return airplane;
        } catch (error) {
            console.log("Something error at repository level !");
            throw { error };
        }
    }


    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something error at repository level !");
            throw { error };
        }
    }


    async updateAirplane(id, data) {
        try {
            const airplane = await Airplane.update(data, {
                where:{
                    id:id
                }
            });
            return airplane;
        } catch (error) {
            console.log("Something error at repository level !");
            throw { error };
        }
    }


    async deleteAirplane(id) {
        try {
            await Airplane.destroy({
                where:{
                    id:id
                }
            });
            return true;
        } catch (error) {
            console.log("Something error at repository level !");
            throw { error };
        }
    }

    
    async getAllAirplanes(){
        try {
            const airplane = await Airplane.findAll();
            return airplane;
        } catch (error) {
            console.log("Something error at repository level !");
            throw { error };
        }
    }
}

module.exports = AirplaneRepository;