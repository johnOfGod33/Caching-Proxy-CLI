#!/usr/bin/env node

const { argv } = require("yargs");
const startServer = require("./src/server");
const port = argv.p || argv.port;
const origin = argv.o || argv.origin;

startServer(port, origin);
