const express = require('express');
const {PORT} = require('./config/serverconfig.js');
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repository.js');

const setupadnStartService = async() =>{
    // create a express object;
    const app = express();

    //middleware;
    app.use(bodyParser.json());     

    app.listen(PORT, ()=>{
        console.log(`server listening at port :- ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name:"New Delhi"});
    })
}

setupadnStartService();