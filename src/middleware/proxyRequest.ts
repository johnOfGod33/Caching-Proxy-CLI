import axios from "axios";
import getRequestConfig from "../configs/getRequestConfig";
import Cache from "../configs/redisCache";
import { Request, Response } from "express";

const proxyRequest = (origin: string) => {
  return async (req: Request, res: Response) => {
    const requestConfig = getRequestConfig(req, origin);

    console.info(`request to ${requestConfig.url}`);

    try {
      const cache = new Cache();
      const response = await axios(requestConfig);

      await cache.setCache(req.url, response.data);

      res.status(response.status).json(response.data);
    } catch (err) {
      res.status(500).json({ message: "Server invailable" });
      console.log(err);
    }
  };
};

export default proxyRequest;
