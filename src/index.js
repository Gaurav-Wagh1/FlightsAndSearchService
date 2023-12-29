const express = require('express');
const {PORT} = require('./config/serverconfig.js');

const setupadnStartService = async() =>{
    // create a express object;
    const app = express();

    app.listen(PORT, ()=>{
        console.log(`server listening at port :- ${PORT}`);
    })
}

setupadnStartService();