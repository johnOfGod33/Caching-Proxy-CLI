import Cache from "./configs/redisCache";

const clearCache = () => {
  const cache = new Cache();

  cache.clearCache().then(() => console.info("SUCCESS"));
};

export default clearCache;
