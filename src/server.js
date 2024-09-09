const startServer = (port = 4040, origin = "http://locaclhost:3000") => {
  const express = require("express");
  const cors = require("cors");
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/", (req, res) => {
    res.send("helllo i start server from my cli");
  });

  app.listen(port, () => {
    console.log("port type is", typeof port);
    console.log(`server runing at port ${port} and have origin : ${origin}`);
  });
};

module.exports = startServer;
