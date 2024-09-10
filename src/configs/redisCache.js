const { createClient } = require("redis");

class Cache {
  constructor() {
    this.client = createClient();
    this.client.on("error", (err) => console.error("Redis Client Error", err));
  }

  async setCache(cacheKey, value) {
    await this.client.connect();
    await this.client.setEx(cacheKey, 300, JSON.stringify(value));
    await this.client.disconnect();
  }

  async getCache(cacheKey) {
    await this.client.connect();
    const value = await this.client.get(cacheKey);
    await this.client.disconnect();

    return value ? JSON.parse(value) : null;
  }

  async clearCache() {
    await this.client.connect();
    await this.client.flushAll();
    await this.client.disconnect();
  }
}

module.exports = Cache;
