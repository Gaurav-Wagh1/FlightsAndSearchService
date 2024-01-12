const { Flight } = require('../models/index');
const CrudRepository = require('./crud-repository');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }
}

module.exports = FlightRepository;