#!/usr/bin/env node

process.on("unhandledRejection", (err) => {
	process.exit(0);
});

const yargs = require("yargs").scriptName("version-check");
const{ vc, vc_dev, vc_all } = require("../src/commands");
const helpText = require('../utils/helperText')

if (
	yargs.argv._.filter((elem) => {
		return elem === "vc" || elem === "vc_dev" ||elem === "vc_all";
	}).length === 0
) {
	helpText()
	process.exit(0);
}

vc(yargs);
vc_dev(yargs);
vc_all(yargs);

yargs.parse();

