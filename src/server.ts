import express from "express";
import proxyRequest from "./middleware/proxyRequest";
import getDataByCache from "./middleware/getDataByCache";

const startServer = (port = 4040, origin = "http://localhost:3000") => {
  const app = express();
  const cors = require("cors");

  app.use(cors());
  app.use(express.json());

  app.use(getDataByCache(origin));
  app.use(proxyRequest(origin));

  app.listen(port, () => {
    console.log(`server runing at port ${port} and have origin : ${origin}`);
  });
};

export default startServer;
