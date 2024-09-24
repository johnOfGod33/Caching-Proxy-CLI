#!/usr/bin/env node

import startServer from "./server";
import clearCache from "./clearCache";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

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