const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTiming } = require('../utils/helper');
const { Op } = require('sequelize');

class FlightService {

    #createFilter(data) {
        const filter ={};       // main filter object

        // sub filter object, it will be pushed into the array;
        const filterObject = {};   

        if (data.departureAirportId) {
            filterObject.departureAirportId = data.departureAirportId;
        }
        if (data.arrivalAirportId) {
            filterObject.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.airplaneId) {
            filterObject.airplaneId = data.airplaneId;
        }

        // this array is calculated for "and" operator of sequelize
        const filterArray = [];

        if (data.minPrice) {
            filterArray.push({price:{[Op.gte]:data.minPrice}});
        };

        if(data.maxPrice) {
            filterArray.push({price:{[Op.lte]:data.maxPrice}});
        }

        // sub object is pushed in array here;
        filterArray.push(filterObject);

        // the main filter object here modified here to create a final filter;
        Object.assign(filter, {[Op.and]:filterArray});

        return filter;
    }

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }


    async createFlight(data) {
        try {
            if (compareTiming(data.departureTime, data.arrivalTime)) {
                throw { error: "Arrival date cannot be less than departure date !" }
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at the service layer!")
            throw { error }
        }
    }


    async getFlight(id) {
        try {
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong at the service layer!")
            throw { error }
        }
    }


    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);    // we'll get final filter object here
             
            const flights = await this.flightRepository.getAllFlights(filterObject);
            return flights;
        } catch (error) {
            console.log("Something went wrong at the service layer!")
            throw { error }
        }
    }
}

module.exports = FlightService;

/***
 * {
 *  flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  totalSeats  -->   airplanes table
 * }
 */