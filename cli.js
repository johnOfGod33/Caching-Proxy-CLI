#!/usr/bin/env node

const startServer = require("./src/server");
const clearCache = require("./src/clearCache");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

yargs(hideBin(process.argv))
  .command(
    "*",
    "start the caching proxy server",
    (yargs) => {
      return yargs
        .option("port", {
          alias: "p",
          type: "number",
          default: 4040,
          description: "Port on which the proxy server will run",
        })
        .option("origin", {
          alias: "o",
          type: "string",
          default: "http://localhost:3000",
          description:
            "The origin URL to which the proxy will forward requests",
        });
    },
    (argv) => {
      startServer(argv.port, argv.origin);
    }
  )
  .command("clear-cache", "Clear the cache", () => {
    clearCache();
  })
  .parse();
