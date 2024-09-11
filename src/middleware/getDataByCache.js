const Cache = require("../configs/redisCache");

const getDataByCache = (origin) => {
  return async (req, res, next) => {
    const cache = new Cache();

    try {
      const data = await cache.getCache(req.url);

      if (data) {
        console.info("X-Cache: HIT");
        res.set("X-Cache", "HIT");
        res.status(200).json(data);
      } else {
        console.info("X-Cache: MISS");
        res.set("X-Cache", "MISS");
        next();
      }
    } catch (err) {
      console.log("can't access to the cache");
      next();
    }
  };
};

module.exports = getDataByCache;
