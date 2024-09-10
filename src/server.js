const startServer = (port = 4040, origin = "http://localhost:3000") => {
  const express = require("express");
  const cors = require("cors");
  const proxyRequest = require("./middleware/proxyRequest");
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(proxyRequest(origin));

  app.listen(port, () => {
    console.log(`server runing at port ${port} and have origin : ${origin}`);
  });
};

module.exports = startServer;
