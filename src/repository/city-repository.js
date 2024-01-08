const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository {

    // create a particular city;

    // async createCity({ name }) {        
    //     try {
    //         const city = await City.create({ name });
    //         return city;
    //     }
    //     catch (error) {
    //         console.log("Some error at repository level !");
    //         throw { error };
    //     }
    // }


    // create multiple cities in bulk by passing an array of object in req.body


    async createCity(data_array) {
        try {
            const cities = await City.bulkCreate(data_array);
            return cities;

        } catch (error) {
            console.log("Some error at repository level !");
            throw { error };
        }
    }


    async deleteCity(cityId) {          // delete the city;
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Some error at repository level !");
            throw { error };
        }
    }


    async updateCity(cityId, data) {            // update the city;
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;

        } catch (error) {
            console.log("Some error at repository level !");
            throw { error };
        }
    }


    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Some error at repository level !");
            throw { error };
        }
    }

    // if no filter, then it will return all the cities;
    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Some error at repository level !");
            throw { error };
        }
    }

}

module.exports = CityRepository;