const express = require('express');
const {PORT} = require('./config/serverconfig.js');
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repository.js');

const APIRoutes = require('./routes/index.js');

const setupadnStartService = async() =>{
    // create a express object;
    const app = express();

    //middleware;
    app.use(bodyParser.json());  
    app.use('/api', APIRoutes);   

    app.listen(PORT, ()=>{
        console.log(`server listening at port :- ${PORT}`);
    })
}

setupadnStartService();