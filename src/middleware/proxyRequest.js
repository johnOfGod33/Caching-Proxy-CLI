const axios = require("axios");
const getRequestConfig = require("../configs/getRequestConfig");
const Cache = require("../configs/redisCache");
const proxyRequest = (origin) => {
  return async (req, res) => {
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

module.exports = proxyRequest;
