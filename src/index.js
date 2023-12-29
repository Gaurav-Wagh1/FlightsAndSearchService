const express = require('express');
const {PORT} = require('./config/serverconfig.js');
const bodyParser = require('body-parser');

const setupadnStartService = async() =>{
    // create a express object;
    const app = express();

    app.use(bodyParser.json());

    app.listen(PORT, ()=>{
        console.log(`server listening at port :- ${PORT}`);
    })
}

setupadnStartService();