# Cachin Proxy

A server that sits between clients and a target server to intercept and cache responses

# How it works

When a client requests data, the proxy checks if the data is already stored (cached). If so, it serves the cached version instead of querying the target server, reducing load times and server requests

# TECH

- Node js
- Express js
- Redis
