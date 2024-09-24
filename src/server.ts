import express from "express";
import proxyRequest from "./middleware/proxyRequest";
import getDataByCache from "./middleware/getDataByCache";
import cors from "cors";

const startServer = (port = 4040, origin = "http://localhost:3000") => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(getDataByCache());
  app.use(proxyRequest(origin));

  app.listen(port, () => {
    console.log(`server runing at port ${port} and have origin : ${origin}`);
  });
};

export default startServer;
