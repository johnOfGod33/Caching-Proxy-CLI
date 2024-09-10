const clearCache = () => {
  const Cache = require("./configs/redisCache");
  const cache = new Cache();

  cache.clearCache().then(() => console.info("SUCCESS"));
};

module.exports = clearCache;
