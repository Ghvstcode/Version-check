#!/usr/bin/env node

require('../src/commands')
process.on("unhandledRejection", (err) => {
	process.exit(0);
});

