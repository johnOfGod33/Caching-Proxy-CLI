import dotenv from "dotenv";
import { createClient, RedisClientType } from "redis";

dotenv.config();

class Cache {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      password: process.env.REDIS_PASSWORD || "",
      socket: {
        host: process.env.REDIS_HOST || "localhost",
        port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
      },
    });
    this.client.on("error", (err) => console.error("Redis Client Error", err));
  }

  async setCache(cacheKey: string, value: unknown) {
    await this.client.connect();
    await this.client.setEx(cacheKey, 300, JSON.stringify(value));
    await this.client.disconnect();
  }

  async getCache(cacheKey: string) {
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

export default Cache;
