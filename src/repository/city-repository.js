const { City } = require('../models/index');
const CrudRepository = require('./crud-repository');

class CityRepository extends CrudRepository {

    constructor() {
        super(City);
    }

    async create(data_array) {
        try {
            const cities = await City.bulkCreate(data_array);
            return cities;

        } catch (error) {
            console.log("Some error at repository level !");
            throw { error };
        }
    }

}

module.exports = CityRepository;