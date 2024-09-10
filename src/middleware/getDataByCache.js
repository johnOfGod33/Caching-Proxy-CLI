const Cache = require("../configs/redisCache");

const getDataByCache = (origin) => {
  return async (req, res, next) => {
    const cache = new Cache();

    try {
      const data = await cache.getCache(req.url);

      if (data) {
        res.set("X-CACHE", "HIT");
        res.status(200).json(data);
      } else {
        res.set("X-CACHE", "MISS");
        next();
      }
    } catch (err) {
      console.log("can't access to the cache");
      next();
    }
  };
};

module.exports = getDataByCache;
