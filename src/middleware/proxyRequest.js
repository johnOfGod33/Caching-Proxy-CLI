const axios = require("axios");
const getRequestConfig = require("../configs/getRequestConfig");

const proxyRequest = (origin) => {
  return async (req, res, next) => {
    const requestConfig = getRequestConfig(req, origin);

    console.log(requestConfig);

    try {
      const response = await axios(requestConfig);
      res.status(response.status).json(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

module.exports = proxyRequest;
