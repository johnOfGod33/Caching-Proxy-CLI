const getRequestConfig = (req, origin) => {
  let requestUrl = `${origin}${req.url}`;

  let requestConfig = {
    method: req.method,
    url: requestUrl,
    headers: req.headers,
  };

  if (req.method !== "GET" && req.method !== "HEAD" && req.body) {
    requestConfig.data = req.body;
  }

  return requestConfig;
};

module.exports = getRequestConfig;
