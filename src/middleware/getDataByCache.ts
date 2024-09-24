import Cache from "../configs/redisCache";
import { Request, Response, NextFunction } from "express";

const getDataByCache = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
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
    } catch {
      console.log("can't access to the cache");
      next();
    }
  };
};

export default getDataByCache;
