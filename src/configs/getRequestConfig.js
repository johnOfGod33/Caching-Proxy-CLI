const getRequestConfig = (req, origin) => {
  let requestUrl = `${origin}${req.url}`;

  let requestConfig = {
    method: "get",
    url: requestUrl,
    headers: req.headers,
  };

  return requestConfig;
};

module.exports = getRequestConfig;
