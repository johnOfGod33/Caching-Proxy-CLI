# CACHING PROXY CLI

A server that sits between clients and a target server to intercept and cache responses with CLI tool

![alt text](asset/cli%20example.png)

## HOW IT WORKS

When a client requests data, the proxy checks if the data is already stored (cached). If so, it serves the cached version instead of querying the target server, reducing load times and server requests

## TECH

- Node js
- Express js
- Redis

## PREREQUISITES

1. **Node.js** and **npm**. [Download Node.js](https://nodejs.org/)

2. **Redis** (local or cloud). You can install [Redis locally](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/) or use a [Cloud Redis service](https://redis.io/cloud/)

## INSTALLATION

```bash
git clone https://github.com/johnOfGod33/Caching-Proxy-CLI.git

cd Caching-Proxy-CLI

npm run build

npm install -g
```

### CONFIG (if you use redis cloud)

```bash
# Create environment variables

touch .env

# Add your redis host

echo "REDIS_HOST=your_redis_host" >> .env

# Add your redis port

echo "REDIS_PORT=your_redis_port" >> .env

# Add your redis password

echo "REDIS_PASSWORD=your_redis_password" >> .env

npm install -g
```

## USAGE

### Starting the Caching Proxy Server

To start the caching proxy server, run the following command:

```bash
caching-proxy --port <number> --origin <url>
```

- `-p, --port`: Port on which the proxy server will run
- `-o, --origin`: The origin URL to which the proxy will forward requests.

For example if the user runs the following command:

```bash
caching-proxy --port 3000 --origin http://dummyjson.com
```

Taking the above example, if the user makes a request to http://localhost:3000/products, the caching proxy server should forward the request to http://dummyjson.com/products, return the response along with headers and cache the response

```
# If the response is from the cache

X-Cache: HIT

# If the response is from the origin server

X-Cache: MISS
```

### Clearing the Cache

You can clear the cache by running the following command:

```bash
caching-proxy clear-cache
```

## Project URL ([roadmap.sh](https://roadmap.sh))

https://roadmap.sh/projects/caching-server
