const CityRepository = require('../repository/city-repository');
const { Op } = require('sequelize');
const CrudService = require('./crud-service');


class CityService extends CrudService {
    constructor() {
        const cityRepository = new CityRepository();
        super(cityRepository);
    }

    #createFilter({ name }) {
        const filter = {
            name: {
                [Op.startsWith]: name
            }
        }
        return filter;
    }

    getAll(filterObject) {
        if (filterObject.name) {
            return super.getAll(this.#createFilter(filterObject));
        }
        return super.getAll(filterObject);
    }
}

module.exports = CityService;