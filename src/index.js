const express = require("express");
const { PORT } = require("./config/serverconfig.js");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const APIRoutes = require("./routes/index.js");

const setupadnStartService = async () => {
  // create a express object;
  const app = express();

  //middleware;
  app.use(morgan("combined"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/flightsearch/api", APIRoutes);

  app.listen(PORT, async () => {
    console.log(`server listening at port :- ${PORT}`);
  });
};

setupadnStartService();
